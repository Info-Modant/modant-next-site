import {PortfolioItem} from "../../data/dataStructure";
import { useRouter } from "next/router";
import {useEffect, useState} from "react";
import {NotFound} from "../../components/NotFound";
import {Title} from "../../components/smallcomponents/Title";
import {Color} from "../../utilities/color";
import { Layout } from "../../components/Layout";
import {Vimeo} from "../../components/Vimeo";

const portfolio = require('../../data/portfolios.json') as PortfolioItem[];

export async function getServerSideProps (context: {
  query: {
    id: string | undefined
  }
}) {
  const { query: { id } } = context;
  const project = id ? portfolio.find(p => p.id.toString() === id) : null;

  //you can make DB queries using the data in context.query
  return {
    props: { project }
  };
}

enum DisplayStatus {
  complete,
  fail,
}

interface ProjectDisplayState {
  project: PortfolioItem | null,
  status: DisplayStatus
}

interface IndividualProjectPageProps {
  project: PortfolioItem | null,
}

export default function IndividualProjectPage({ project }: IndividualProjectPageProps) {

  const { asPath } = useRouter();

  const [projectDisplayState, setProjectDisplayState] = useState<ProjectDisplayState>({
    project: project,
    status: DisplayStatus.complete
  });

  useEffect(() => {
    if (project === null) {
      const index = portfolio.findIndex(p => asPath.includes(p.titleInHyphens));

      if (index >= 0) {
        setProjectDisplayState({
          project: portfolio[index],
          status: DisplayStatus.complete
        });
      } else {
        setProjectDisplayState({
          project: null,
          status: DisplayStatus.fail
        });
      }
    }
  }, [project]);

  return (
    <Layout className="portfolio-page">
      {
        projectDisplayState.status === DisplayStatus.fail ?
          <NotFound /> :
          projectDisplayState.project &&
          <div className="individual-project-display-container">
            <Title title={ projectDisplayState.project.title } underlineColor={ Color.Primary } />

            <Vimeo title={ projectDisplayState.project.title }
                   titleInHyphens={ projectDisplayState.project.titleInHyphens }
                   src={ projectDisplayState.project.videoLink }  />

            <p className="description">{ projectDisplayState.project.description }</p>
          </div>
      }
    </Layout>
  )
}