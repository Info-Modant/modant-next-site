import React, {useEffect, useRef} from 'react';
import {Layout} from "../components/Layout";
import {Color} from "../utilities/color";
import {Divider} from "../components/smallcomponents/Divider";
import {AboutUs, SiteInfo} from "../data/dataStructure";
import {AboutUsContainer} from "../components/AboutUsContainer";
import {useRouter} from "next/router";

// Retrieve data
const siteInfo = require('../data/siteInfo.json') as SiteInfo;
const aboutUs = require('../data/aboutUs.json') as AboutUs;

export async function getServerSideProps (context: {
  query: {
    smoothScroll: string | undefined
  }
}) {
  const { query: { smoothScroll } } = context;

  //you can make DB queries using the data in context.query
  return {
    props: { smoothScroll }
  };
}

interface IndexPageProps {
  smoothScroll: string | undefined,
}

export default function IndexPage({ smoothScroll }: IndexPageProps) {

  const aboutUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(smoothScroll);
    if (smoothScroll === 'about' && aboutUsRef !== null) {
      window.scrollTo({
        top: aboutUsRef?.current?.offsetTop,
        behavior: "smooth",
      });
    }
  }, [smoothScroll, aboutUsRef]);

  return (
    <Layout className="index-page">
      <InitialContainer />
      <div ref={ aboutUsRef }>
        <AboutUsContainer aboutUs={ aboutUs } />
      </div>
    </Layout>
  )

}

function InitialContainer() {

  return (
    <div className="initial-container">
      <div className="home-background-image" />
      <section className="home-main-section">
        <h1>{ siteInfo.title }</h1>
        <Divider background={ Color.Primary } maxWidth="10em" width="100%" height="0.3em" />
        <h3>{ siteInfo.subtitle }</h3>
      </section>

      <section className="showreel-button-section">
        <ShowReelButton />
      </section>
    </div>
  )
}

function ShowReelButton() {

  const router = useRouter();

  return (
    <button className="showreel-button" onClick={ () => router.push('/showreel') }><p>View Showreel</p></button>
  )
}
