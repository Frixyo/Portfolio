
import "./aboutme.css";

import { useMemo } from "react";
import { SiAndroid, SiAndroidstudio, SiApple, SiCodeigniter, SiCss3, SiDotnet, SiExpo, SiGit, SiGo, SiHtml5, SiIntellijidea, SiJavascript, SiKotlin, SiMariadb, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiOracle, SiPhp, SiPython, SiReact, SiSqlite, SiSupabase, SiTrello, SiTypescript, SiUml, SiVite, SiVitepress } from 'react-icons/si';
import { TbBrandCSharp, TbBrandOffice  } from "react-icons/tb";
import { FaJava, FaWindows, FaLinux } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { DiVisualstudio } from "react-icons/di";


function Specialities({currentLang}) {

  const lang = currentLang === "fr" ? 1 : 0;

  const techLogos = useMemo(() => [
    { node: "", title: "Langages" },
    { node: <TbBrandCSharp />, title: "C#"},
    { node: <SiGo />, title: "Go"},
    { node: <FaJava />, title: "Java" },
    { node: <SiKotlin />, title: "Kotlin" },
    { node: <SiPython />, title: "Python" },
    { node: <SiPhp />, title: "PHP" },
    { node: <SiHtml5 />, title: "HTML5" },
    { node: <SiCss3 />, title: "CSS3" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiTypescript />, title: "TypeScript" },

    { node: "", title: "Frameworks" },
    { node: <SiDotnet />, title: ".NET" },
    { node: <SiReact />, title: "React" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiExpo />, title: "Expo" },
    { node: <SiVite />, title: "Vite" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiCodeigniter />, title: "CodeIgniter" },

    { node: "", title: "Bases de données" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiOracle />, title: "Oracle" },
    { node: <SiMariadb />, title: "MariaDB" },
    { node: <SiSqlite />, title: "SQLite" },
    { node: <SiMongodb />, title: "MongoDB" },

    { node: "", title: "Environnements" },
    { node: <SiIntellijidea />, title: "IntelliJ IDEA" },
    { node: <BiLogoVisualStudio />, title: "Visual Studio" },
    { node: <DiVisualstudio />, title: "Visual Studio Code" },
    { node: <SiAndroidstudio />, title: "Android Studio" },

    { node: "", title: "Systèmes d’exploitation" },
    { node: <FaWindows />, title: "Windows" },
    { node: <FaLinux />, title: "Linux" },
    { node: <SiAndroid />, title: "Android" },
    { node: <SiApple />, title: "iOS" },

    { node: "", title: "Autres" },
    { node: <SiGit />, title: "Git" },
    { node: <SiUml />, title: "UML" },
    { node: <SiSupabase />, title: "Supabase" },
    { node: <SiTrello />, title: "Trello" },
    { node: <TbBrandOffice />, title: "Microsoft Office" },
  ], []);

  const doubledTechLogos = useMemo(() => [...techLogos, ...techLogos], [techLogos]);

  const traduction = [
    ["Spécialités","Core Specialities"],
    ["Développement","Development"],
    ["Applications React, responsive UI/UX design et une expérience utilisateur interactive.","React applications, responsive UI/UX design, and interactive user experience."],
    ["Serveurs architectures, APIs REST et conception base de données","Server architectures, REST APIs, and database design"],
    ["Application Mobile","Mobile Application"],
    ["Application mobile Android et IOS avec React Native et Expo ou Android studio","Mobile application for Android and iOS with React Native and Expo or Android Studio"],
    ["Systèmes ERP","ERP Systems"],
    ["Planification des ressources de l'entreprise adaptées aux flux de travail et aux processus de l'entreprise","Enterprise resource planning solutions tailored to business workflows and processes."],
    ["Technologies","Technologies"],
  ]

    return(
        <section className="part2">

            <div className="specialites">
            <h2 className="titre">{traduction[0][lang]}</h2>

            <div className="spe frontend">
                <h3 className="second-titre">Frontend {traduction[1][lang]}</h3>
                <p className="description">{traduction[2][lang]}</p>
            </div>

            <div className="spe backend">
                <h3 className="second-titre">Backend {traduction[1][lang]}</h3>
                <p className="description">{traduction[3][lang]}</p>
            </div>

            <div className="spe mobile">
                <h3 className="second-titre">{traduction[4][lang]}</h3>
                <p className="description">{traduction[5][lang]}</p>
            </div>

            <div className="spe erp">
                <h3 className="second-titre">{traduction[6][lang]}</h3>
                <p className="description">{traduction[7][lang]}</p>
            </div>
            </div>

            <div className="techno">
            <h2 className="titre">{traduction[8][lang]}</h2>
            <div className="loop-container">
                <div className="loop-content">
                {doubledTechLogos.map((item, i) => (
                    <div className="loop-item" key={i}>
                    {item.node}
                    {item.node === "" ? (
                        <span className="categorie">{item.title}</span>
                    ) : (
                        <span>{item.title}</span>
                    )}
                    </div>
                ))}
                </div>
            </div>
            </div>

        </section>
)



}

export default Specialities;