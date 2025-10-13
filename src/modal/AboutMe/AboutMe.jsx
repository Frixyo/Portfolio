
import "./aboutme.css";

import Intro from "./Intro";
import Specialities from "./Specialities";
import Random from "./Random";


function AboutMe({currentLang}) {

  return(
      <div className="about-me">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=location_on" />
        <Intro currentLang={currentLang} />
        <Specialities currentLang={currentLang} />
        <Random currentLang={currentLang} />
      </div>
  )

}

export default AboutMe;