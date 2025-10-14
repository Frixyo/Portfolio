import "./skills.css";

function Skills({currentLang}) {
    const lang = currentLang === "fr" ? 0 : 1;

    const traductionTitles = [
        ['Créatif', 'Creative'],
        ['Résolveur de Problèmes', 'Problem Solver'],
        ['Mémoire d\'éléphant', 'Memory like an Elephant'],
        ['Travail d\'Équipe', 'Team Player'],
        ['Vision', 'Vision'],
        ['Mentor & Coach    ', 'Mentor & Coach'],
    ]
    
    const traductionDescriptions = [
        ["J'essaye d'apporter une touche d'originalité dans tout ce que je fais, j'aime élaborer des idées nouvelles et des solutions pratiques. On m'a toujours dit que je pensais différemment et j'en fais une force, je fais en sorte que chaque résultat soit unique, de valeur et qualitatif.",
            "I try to bring a touch of originality to everything I do. I enjoy developing new ideas and practical solutions. People have always told me that I think differently, and I turn that into a strength. I make sure that every outcome is unique, valuable, and of high quality."],
        ["J'adore être face à des défis, je les aborde avec ma logique et les traites avec clarté. J'analyse les problèmes, trouve des solutions et mets en place celle qui est la plus adaptée. Je les transformes en opportunités d'apprentissage pour toujours m'améliorer.",
            "I love facing challenges, I approach them with logic and handle them with clarity. I analyze problems, find solutions and implement the one that fits best. I turn them into learning opportunities to continuously improve."],
        ["J’aime travailler ma mémoire en apprenant de chaque expérience et de tout ce qui m’entoure. Elle devient un outil vivant qui me permet de retenir l’essentiel, d’éviter les erreurs et de transformer chaque connaissance en nouvelles idées. Cette habitude m’aide à progresser sans cesse et à apporter des solutions toujours plus adaptées et créatives.",
            "I enjoy working on my memory by learning from every experience and everything around me. It becomes a living tool that allows me to retain what matters, avoid mistakes, and turn every piece of knowledge into new ideas. This habit helps me to continuously progress and provide solutions that are more relevant and creative."],
        ["Les grandes réussites viennent du travail d'équipe. J'adore partager des idées et voir les différents points de vue sur le même problème. Chacun a aussi ses forces, c'est pour moi la meilleure manière d'améliorer et d'apprendre des compétences.",
            "Great achievements come from teamwork. I love sharing ideas and seeing different perspectives on the same problem. Everyone has their own strengths, and for me, it's the best way to improve and learn new skills."],
        ["Je me concentre sur la vision globale, en définissant des objectifs clairs et des mesures concrètes pour les atteindre. En alignant stratégie et exécution,  j'obtiens des résultats concrets tout en conservant les exigences requises.", 
            "I focus on the big picture, setting clear goals and concrete measures to achieve them. By aligning strategy and execution, I deliver tangible results while maintaining the required requirements."],
        ["Aider les autres à progresser est un grand objectif personnel. J'essaye de conseiller et d'encourager les autres un maximum, je soutiens le développement personnel et professionnel afin d'avoir la meilleure entente au sein d'une équipe et que chacun puisse exploiter pleinement son potentiel.",
            "Helping others to progress is a major personal goal. I try to advise and encourage others as much as possible, supporting personal and professional development so that everyone can fully exploit their potential."],
    ]

    return (
        <div className="skills-container">
                <div className="skills-title">
                    <img src="/image/skills/ampoule.png" alt="Ampoule" />
                    <h2>{traductionTitles[0][lang]}</h2>
                    <p>{traductionDescriptions[0][lang]}</p>
                </div>

                <div className="skills-title">
                    <img src="/image/skills/puzzle.png" alt="Puzzle" />
                    <h2>{traductionTitles[1][lang]}</h2>
                    <p>{traductionDescriptions[1][lang]}</p>
                </div>

                <div className="skills-title">
                    <img src="/image/skills/cerveau.png" alt="Cerveau" />
                    <h2>{traductionTitles[2][lang]}</h2>
                    <p>{traductionDescriptions[2][lang]}</p>
                </div>
        
                <div className="skills-title">
                    <img src="/image/skills/handshake.png" alt="Handshake" />
                    <h2>{traductionTitles[3][lang]}</h2>
                    <p>{traductionDescriptions[3][lang]}</p>
                </div>


                <div className="skills-title">
                    <img src="/image/skills/telescope.png" alt="Telescope" />
                    <h2>{traductionTitles[4][lang]}</h2>
                    <p>{traductionDescriptions[4][lang]}</p>
                </div>

                <div className="skills-title">
                    <img src="/image/skills/discussion.png" alt="Discussion" />
                    <h2>{traductionTitles[5][lang]}</h2>
                    <p>{traductionDescriptions[5][lang]}</p>
                </div>

        </div>
    );
}

export default Skills;
