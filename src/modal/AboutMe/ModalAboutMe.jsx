import { AnimatePresence, motion } from "motion/react";
import "./ModalAboutMe.css";

function ModalAboutMe({ isVisible, onClose }) {
  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="backdrop"
          onClick={handleBackdropClick}
        >
          <motion.div
            className="modal-box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
          <button className="close-button" onClick={onClose}>✕</button>
          <div className="part1">
            <h2>À propos de moi</h2>
            <h3>Je suis étudiant en génie Logiciel l'ETS à Montréal.</h3>
            <p>J'ai toujours aimé transformer les problèmes complexes en solutions simples et efficaces. 
              Quand je ne suis pas occupé à coder, vous me trouverez probablement en train de faire du sport, de jouer à des jeux vidéo, des jeux de société ou imaginer de nouveaux projets.
            </p>
          </div>
          <div className="part2">
            <h2>Random facts</h2>
            <ul>
              <li>Je suis légèrement accro aux réseaux sociaux</li>
              <li>J'ai une très bonne mémoire</li>
              <li>J'adore me casser la tête avec des problèmes</li>
              <li>J'aime cuisiner (et manger)</li>
            </ul>
          </div>
          <div className="part3">
            <h2>Mon histoire</h2>
            <p>
              Passionné par la technologie depuis mon plus jeune âge, il m'a toujours semblé évident de m'orienter vers le développement.
              À 16 ans, j'ai commencé à créer mes premiers sites web et applications, en apprenant de manière autodidacte les bases du HTML, du CSS, du JavaScript et de Python.
              J'ai ensuite poursuivi mes études à l'IUT de Nantes, où j'ai intégré un BUT Informatique qui m'a permis d'approfondir mes compétences en développement logiciel et en gestion de projet.
              Aujourd'hui, je poursuis mon parcours en génie logiciel à l'École de Technologie Supérieure (ÉTS) de Montréal, dans le cadre d'un échange académique.
              Cette expérience internationale m'a permis de développer de nouvelles compétences, autant techniques qu'humaines, en me rapprochant concrètement du métier d'ingénieur.
              Tout au long de mon parcours, j'ai eu l'occasion de travailler sur de nombreux projets variés,
              allant de la création de sites web à la conception d'applications mobiles, en passant par la gestion de bases de données.

            </p>
          </div>
          

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalAboutMe;
