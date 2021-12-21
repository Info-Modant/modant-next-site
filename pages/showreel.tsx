import {Layout} from "../components/Layout";
import {Title} from "../components/smallcomponents/Title";
import {Color} from "../utilities/color";
import {Vimeo} from "../components/Vimeo";

const showreel = require('../data/showreel.json') as { videoLink: string };

export default function ShowreelPage() {

  return (
    <Layout className="showreel-page">
      <div className="individual-project-display-container">
        <Title title="Showreel" underlineColor={ Color.Primary } />

        <Vimeo title="Showreel"
               titleInHyphens="showreel"
               src={ showreel.videoLink }  />
      </div>
    </Layout>
  )
}