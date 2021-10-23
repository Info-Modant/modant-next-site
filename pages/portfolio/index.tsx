import {Layout} from "../../components/Layout";
import {Title} from "../../components/smallcomponents/Title";
import {Color} from "../../utilities/color";
import {PortfolioItem} from "../../data/dataStructure";
import Image from 'next/image';
import {useState} from "react";
import { useRouter } from "next/router";

const portfolio = require('../../data/portfolios.json') as PortfolioItem[];

export default function PortfolioPage() {

  return (
    <Layout className="portfolio-page">
      <Title title="Portfolio" underlineColor={ Color.Primary } />
      <PortfolioItemsGrid portfolio={ portfolio } />
    </Layout>
  )
}

interface PortfolioItemsGridProps {
  portfolio: PortfolioItem[]
}

function PortfolioItemsGrid({ portfolio }: PortfolioItemsGridProps) {

  return (
    <div className="portfolio-items-grid">
      { portfolio.map(project =>
        <Project project={ project } key={ project.titleInHyphens } />
      ) }
    </div>
  )
}

interface PortfolioItemProps {
  project: PortfolioItem,
}

function Project({ project }: PortfolioItemProps) {

  const [hover, setHover] = useState(false);
  const router = useRouter();

  const onMouseEnter = () => {
    setHover(true);
  }

  const onMouseLeave = () => {
    setHover(false);
  }

  return (
    <section className={`project ${hover ? 'project-hover' : ''}`} id={project.titleInHyphens}
             onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
             onClick={ () => router.push({
               pathname: `/portfolio/${ project.titleInHyphens }`,
               query: {
                 titleInHyphens: project.titleInHyphens,
               }
             }) }
    >
      <div className={`animation-container ${hover ? 'hover-animation' : 'exit-hover-animation'}`}>
        <div className="img-container">
          <Image src={project.thumbnail} width="100%" height="100%"
                 alt={`Thumbnail for ${project.title} created in ${project.date}`}/>
        </div>
        <div className="title-container">
          <h2>{project.title}</h2>
        </div>
      </div>
    </section>
  )
}