import { AnimatePresence, motion } from "motion/react";
import "./ModalSkills.css";
import Skills from "./Skills";

function ModalSkills({ isVisible, onClose, currentLang}) {
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

          {currentLang === 'fr' ? <h1 className="modal-title">Mes compétences</h1> : <h1 className="modal-title">My skills</h1>}
          <Skills currentLang={currentLang} />

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalSkills;
