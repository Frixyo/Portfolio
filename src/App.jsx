import { useState } from "react";

import Keyboard from "./Keyboard";
import Commande from "./commande/Commande";
import LangButton from "./langbutton/LangButton";

import DarkVeil from "../Reactbits/DarkVeil/DarkVeil";
import TextType from '../Reactbits/TextType/TextType';
import ModalAboutMe from './modal/AboutMe/ModalAboutMe';
import ModalWork from './modal/Work/ModalWork';
import ModalSkills from './modal/Skills/ModalSkills';
import ModalGame from './modal/Game/ModalGame';
import ModalHireMe from './modal/HireMe/ModalHireMe';


function App() {

const [activeModal, setActiveModal] = useState(null);
const [currentLang, setCurrentLang] = useState('fr')

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh' }}>

      {activeModal === 'about' && <ModalAboutMe isVisible={true} onClose={() => setActiveModal(null)} />}
      {activeModal === 'work' && <ModalWork isVisible={true} onClose={() => setActiveModal(null)} />}
      {activeModal === 'skills' && <ModalSkills isVisible={true} onClose={() => setActiveModal(null)} currentLang={currentLang} />}
      {activeModal === 'game' && <ModalGame isVisible={true} onClose={() => setActiveModal(null)} />}
      {activeModal === 'hire' && <ModalHireMe isVisible={true} onClose={() => setActiveModal(null)} currentLang={currentLang} />}

      <div className="title">
        <span className="label1">&lt;coder&gt;</span>
        <span className="name">Clément Righele</span>
        <span className="label2">designer</span>
      </div>

      
    
      <TextType
        text={currentLang === 'fr'
          ? [
              "<h1>Bienvenue sur mon portfolio !</h1>",
              "<p>Je suis Clément Righele, Développeur en génie logiciel !</p>",
              "<p>Cliquez sur les touches du clavier pour interagir avec le site !</p>",
              "<p>Mon Portfolio n'est pas encore fini, je le complèterai le plus vite possible.</p>"
            ]
          : [
              "<h1>Welcome to my portfolio!</h1>",
              "<p>I am Clément Righele, Software Engineer!</p>",
              "<p>Click on the keyboard keys to interact with the site!</p>",
              "<p>My Portfolio is not finished yet, I will complete it as soon as possible.</p>"
            ]
        }
        typingSpeed={85}
        pauseDuration={2500}
        showCursor={true}
        cursorCharacter="|"
      />

      <Keyboard activeModal={activeModal} setActiveModal={setActiveModal} />
      <DarkVeil />
      <Commande currentLang={currentLang} />
      <LangButton
        currentLang={currentLang}
        onChangeLang={setCurrentLang}
      />
    </main>
  );
}

export default App;
