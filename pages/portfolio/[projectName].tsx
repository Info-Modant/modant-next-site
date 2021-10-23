import {PortfolioItem} from "../../data/dataStructure";

const portfolio = require('../../data/portfolios.json') as PortfolioItem[];

export async function getServerSideProps (context: {
  query: {
    titleInHyphens: string | undefined
  }
}) {

  const { query: { titleInHyphens } } = context;
  const project = portfolio.find(p => p.titleInHyphens === titleInHyphens);

  //you can make DB queries using the data in context.query
  return {
    props: { project }
  };
}

interface IndividualProjectPageProps {
  project: PortfolioItem,
}

export default function IndividualProjectPage({ project }: IndividualProjectPageProps) {

  console.log(project);

  return (
    <div>Individual project</div>
  )
}