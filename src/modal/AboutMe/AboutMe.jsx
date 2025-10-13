
import "./aboutme.css";

import Intro from "./Intro";
import Specialities from "./Specialities";
import Random from "./Random";


function AboutMe({currentLang}) {

  return(
      <div className="about-me">
        <Intro currentLang={currentLang} />
        <Specialities currentLang={currentLang} />
        <Random currentLang={currentLang} />
      </div>
  )

}

export default AboutMe;