import React from 'react';
import {Layout} from "../components/Layout";
import {Color} from "../utilities/color";
import {Divider} from "../components/smallcomponents/Divider";
import {AboutUs, SiteInfo} from "../data/dataStructure";
import {AboutUsContainer} from "../components/AboutUsContainer";
import {useRouter} from "next/router";
import {VimeoAutoplay} from "../components/Vimeo";

// Retrieve data
const siteInfo = require('../data/siteInfo.json') as SiteInfo;
const aboutUs = require('../data/aboutUs.json') as AboutUs;

export default function IndexPage() {

  return (
    <Layout className="index-page">
      <VimeoAutoplay autoplayVideoLink={ siteInfo.autoplayVideoLink } />
      <InitialContainer />
      <AboutUsContainer aboutUs={ aboutUs } />
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
