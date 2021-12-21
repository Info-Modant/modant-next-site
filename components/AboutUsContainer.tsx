import {useRouter} from "next/router";
import {Title} from "./smallcomponents/Title";
import {Color} from "../utilities/color";
import {RegExp} from "../utilities/regExp";
import {Button} from "./smallcomponents/Button";
import {faAddressBook, faFolder} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {AboutUs, Profile} from "../data/dataStructure";
import Image from "next/image";

interface AboutUsContainerProps {
  aboutUs: AboutUs,
}

export function AboutUsContainer({ aboutUs }: AboutUsContainerProps) {

  const router = useRouter();

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
            <Button leftIcon={faFolder} onClick={ () => router.push('/portfolio') }>Portfolio</Button>
            <Button leftIcon={faAddressBook} onClick={ () => router.push('/contact') }>Contact</Button>
          </section>
        </div>
        <div className="profile-section">
          <section>
            { aboutUs.profiles.map((profile, i) => {

              return <ProfileDisplay key={ i } profile={ profile } /> })
            }
          </section>
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