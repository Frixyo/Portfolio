
import "./aboutme.css";


function Intro({currentLang}) {

  const lang = currentLang === "fr" ? 0 : 1;

  const traduction = [
    ["Construire des solutions simples pour des besoins complexe", "Building Simple Solutions for Complex Needs"],
    ["Je suis un étudiant en génie logiciel, animé par la passion d'imaginer et créer. J'essaye de toujours d'innover en transformant la complexité en expériences simples et agréables à utiliser.", "I'm a software engineering student driven by a passion for imagining and creating. I always strive to innovate by transforming complexity into simple and enjoyable user experiences."],
    ['DUT Informatique', 'DUT Computer Science'],
    ['2023 - Présent | ÉTS Montréal, Canada', '2023 - Present | ÉTS Montreal, Canada'],
    ['Baccalauréat en Génie Logiciel', 'Bachelor in Software Engineering'],
    ["Spécialités","Core Specialities"],
  ]

  return(
    <section className="part1">

        <div className="intro">
            <div className="localisation">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=location_on" />
                <span className="material-symbols-outlined">location_on</span>
                <p>Canada Québec Montréal, France Vannes</p>
            </div>
            <h2 className="titre">{traduction[0][lang]}</h2>
            <p className="description">{traduction[1][lang]}</p>
            </div>
        <div>

        <div className="image">
            <img src="/image/imgmoi.jpg" alt="Image de moi" />
        </div>

        <div className="parcours">
            <div className="formation">
            <div className="dot"></div>
            <div className="content">
                <p className="date">2021 - 2023 | IUT de Nantes, France</p>
                <p className="second-titre">{traduction[2][lang]}</p>
            </div>
            </div>

            <div className="formation">
            <div className="dot"></div>
            <div className="content">
                <p className="date">{traduction[3][lang]}</p>
                <p className="second-titre">{traduction[4][lang]}</p>
            </div>
            </div>
        </div>

        </div>

    </section>
  )

}

export default Intro;