import "./game.css"
import { useState, useEffect } from "react";


function Game({currentLang}){
    const lang = currentLang === "fr" ? 0 : 1;

    const traduction = [
        ["Jeu de dactylographie","Typing Game"],
        ["J'ai commencé plein de projets. Certains fonctionnent, d'autres dorment dans le dossier REPO. Pourtant, à chaque fois que je code j'ai l'impression de lancer une petite fusée. Pas sûr qu'elle atteigne Mars, mais au moins les plans sont dessinés. Parfois seul le moteur existe, parfois elle se crash, et parfois... elle décolle.","I have started many projects. Some work, others are still sleeping in the REPO folder. But every time I code, it feels like launching a tiny rocket. I'm not sure it will reach Mars, but at least the blueprints exist. Sometimes only the engine is created, sometimes it crashes, and sometimes... it takes off."],
        ["MPM","WPM"],
        ["Temps","Time"],
        ["Fautes","Errors"],
        ["Meilleur Score","Best Score"],
        ["Recommencer","Restart"]
    ]

    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const [errors, setErrors] = useState([]);
    const [nbmot, setNbMot] = useState(0);
    const [textencours, setTextEnCours] = useState("");
    const [text] = useState(traduction[1][lang].split(" "));
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isNewBest, setIsNewBest] = useState(false);

    const bestScoreClass = isNewBest ? "bestscore ok" : "bestscore";

    useEffect(() => {
        if (!isRunning) return;

        const start = Date.now() - timer; 
        const intervalId = setInterval(() => {
            setTimer(Date.now() - start);
        }, 10);

        return () => clearInterval(intervalId);
    }, [isRunning, timer]);

    useEffect(() => {
        const saved = localStorage.getItem("bestScore");
        if (saved) setBestScore(parseFloat(saved));
    }, []);

    useEffect(() => {
        if (bestScore > 0) {
            localStorage.setItem("bestScore", bestScore);
        }
    }, [bestScore]);

    function handleSpace() {
        if (nbmot >= text.length) return;

        const isWrong = textencours.trim() !== text[nbmot];
        setErrors(prev => [...prev, isWrong]);

        setNbMot(prev => prev + 1);
        setTextEnCours("");

        if (nbmot + 1 === text.length) {
            calculScore();
        }
    }

    function calculScore() {
        setIsRunning(false);
        const seconds = timer / 1000;
        const chars = traduction[1][lang].length;
        const erreurs = errors.filter(Boolean).length;
        const mpm = ((chars / 5) / (seconds / 60)) * (1 - Math.sqrt(erreurs / chars));
        setScore(mpm.toFixed(2));

        if (mpm > bestScore) {
            setBestScore(mpm.toFixed(2));
            setIsNewBest(true);
            setTimeout(() => {
                setIsNewBest(false); 
            }, 2000);
        }

    }

    function handleChange(e) {
        if (textencours.trim() === "" && e.target.value.endsWith(" ")) return;
        if (nbmot === text.length) return;

        if (!isRunning) {
            setIsRunning(true);
        }

        setTextEnCours(e.target.value);

        if (e.target.value.endsWith(" ")) {
            handleSpace();
        }

    }
    
    function resetGame() {
        setTextEnCours("");
        setNbMot(0);
        setErrors([]);
        setScore(0);
        setIsRunning(false);
        setTimer(0);
    }

    const getClassMap = (index) => {
        if (index === nbmot) return text[nbmot].startsWith(textencours) ? "actuel" : "erreur";
        if (index < nbmot) return errors[index] ? "erreur" : "ok";
        return "futur";
    };


    return(
        <section className="game">
            <div className="headergame">
                <h2 className="titre">{traduction[0][lang]}</h2>
                <button className="resetbutton" onClick={() => resetGame()}>{traduction[6][lang]}</button>
            </div>
            
            <div className="stats">
                <p className="timer">{traduction[3][lang] + " : " + (timer / 1000).toFixed(2) + " s"}</p>
                <p className="score">{"Score : " + score + " " + traduction[2][lang]}</p>
                <p className="faute">{traduction[4][lang] + " : " + errors.filter(Boolean).length}</p>
                <p className={bestScoreClass}>{traduction[5][lang] + " : " + bestScore + " " + traduction[2][lang]}</p>
            </div>

            <p className="text">
                {text.map((mot, index) => (
                    <span key={index}>
                        <span className={getClassMap(index)}>{mot}</span>{" "}
                    </span>
                ))}
            </p>
                
            <div className="inputcontainer">
                <textarea
                    id="inputgame"
                    className="inputgame"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                    value={textencours} 
                    autoFocus={true}
                    onChange={e => handleChange(e)}
                />
            </div>

        </section>
    )

}

export default Game;
