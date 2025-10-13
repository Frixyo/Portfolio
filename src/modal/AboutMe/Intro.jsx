
import "./aboutme.css";


function Intro({currentLang}) {

  const lang = currentLang === "fr" ? 1 : 0;

  const traduction = [
      ["Titre à trouver", "Titre à trouver"],
      ["Je suis un étudiant en génie logiciel, animé par la passion d'imaginer et créer. J'essyae de toujours d'innover...", "Je suis un étudiant en génie logiciel, animé par la passion d'imaginer et créer. J'essyae de toujours d'innover..."],
      ['DUT Informatique', 'DUT Computer Science'],
      ['2023 - Présent | ÉTS Montréal, Canada', '2023 - Present | ÉTS Montreal, Canada'],
      ['Baccalauréat en Génie Logiciel', 'Bachelor in Software Engineering'],
      ["Spécialités","Core Specialities"],
  ]

  return(
    <section className="part1">

        <div className="intro">
        <div className="localisation">
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