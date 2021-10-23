import React from 'react';
import {Layout} from "../components/Layout";
import {Color} from "../utilities/color";
import ReelVisionLogo from "../public/images/ReelVisionLogo";
import {Divider} from "../components/smallcomponents/Divider";
import {AboutUs, Profile, SiteInfo} from "../data/dataStructure";
import {Title} from "../components/smallcomponents/Title";
import {RegExp} from "../utilities/regExp";
import {Button} from "../components/smallcomponents/Button";
import {faAddressBook, faFolder} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

// Retrieve data
const siteInfo = require('../data/siteInfo.json') as SiteInfo;
const aboutUs = require('../data/aboutUs.json') as AboutUs;

export default function IndexPage() {

  return (
    <Layout className="index-page">
      <InitialContainer />
      <AboutUsContainer />
    </Layout>
  )

}

function InitialContainer() {

  return (
    <div className="initial-container">
      <div className="home-background-image" />
      <section className="home-main-section">
        <div className="svg-container">
          <ReelVisionLogo />
        </div>
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
  return (
    <button className="showreel-button"><p>Showreel</p></button>
  )
}

function AboutUsContainer() {

  return (
    <div className="about-us-container">
      <Title title={ aboutUs.title } underlineColor={ Color.Primary } />
      <div className="description-and-profile">
        <div className="description-section">
          <section className="description">
            {
              aboutUs.description.split(RegExp.NextLine).map((text, i) => <p key={ i }>{ text }<br/></p>)
            }
          </section>
          <section className="buttons">
            <Button leftIcon={faFolder}>Portfolio</Button>
            <Button leftIcon={faAddressBook}>Contact</Button>
          </section>
        </div>
        <div className="profile-section">
          { aboutUs.profiles.map((profile, i) => {

            return <ProfileDisplay key={ i } profile={ profile } /> })
          }
        </div>
      </div>
    </div>
  )
}

interface ProfileDisplayProps {
  profile: Profile
}

function ProfileDisplay({ profile }: ProfileDisplayProps) {

  return (
    <div className="profile-display">
      <Image src={ profile.image } width="100%" height="100%" alt={`${ profile.name }'s profile`} />
      <h4>{ profile.name }</h4>
    </div>
  )
}
