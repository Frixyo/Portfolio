import { AnimatePresence, motion } from "motion/react";
import "../Modal.css";

function ModalWork({ isVisible, onClose, currentLang }) {
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
          {currentLang === 'fr' ? <h1 className="modal-title">Mes projets</h1> : <h1 className="modal-title">My Works</h1>}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ModalWork;
