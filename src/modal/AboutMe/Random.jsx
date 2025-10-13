import "./aboutme.css";

function Random({currentLang}) {

  const lang = currentLang === "fr" ? 0 : 1;

  const traduction = [
    ["Au-delà du code","Beyond the Code"],
    ["Quand je ne suis pas devant mon ordinateur à coder, mon esprit reste en quête de nouvelles idées. Compétitif de nature et animé par l'envie de me dépasser, le sport et les jeux vidéo sont pour moi le terrain idéal. Coté sport je fais de l'escalade et du badminton, je reste toujours partant pour tester n'importe quel autre sport. Prochainement j'aimerais me mettre à la course avec comme objectif un marathon.","When I'm not sitting in front of my computer coding, my mind is always seeking new ideas. Competitive by nature and driven by the desire to surpass myself, I find in sports and video games the ideal playground. In terms of sports, I do climbing and badminton, and I'm always up for trying any other sport. Soon, I would like to take up running with the goal of completing a marathon."],
    ["J'ai une mémoire si bonne que je me souviens encore de mes premiers bugs.","I have such a good memory that I can still remember my first bugs."],
    ["J'adore les jeux de société (sauf quand je perds, évidemment).","I love board games (except when I lose, obviously)."],
    ["J'aime me casser la tête avec des problèmes de logique… puis me dire “ah mais oui, c'était évident !”.","I love challenging myself with logic problems... only to say to myself, 'Oh right, that was obvious!'."],
    ["Je suis (un peu trop) investi dans Clash Royale et Clash of Clans.","I'm (a little too) invested in Clash Royale and Clash of Clans."],
    ["Je connais tous les drapeaux du monde. Utile ? Pas vraiment. Impressionnant ? Absolument.","I know all the flags of the world. Useful? Not really. Impressive? Absolutely."],
  ]

  return(
    <section className="part3">

    <div className="outside">
        <h2 className="titre">{traduction[0][lang]}</h2>
        <p className="description">{traduction[1][lang]}</p>
    </div>

    <div className="random">
        <h2 className="titre">Random facts</h2>
        <ul className="facts">
        <li>{traduction[2][lang]}</li>
        <li>{traduction[3][lang]}</li>
        <li>{traduction[4][lang]}</li>
        <li>{traduction[5][lang]}</li>
        <li>{traduction[6][lang]}</li>
        </ul>
    </div>

    </section>
  )

}

export default Random;