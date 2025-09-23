import { useState } from "react";

import Keyboard from "./Keyboard";
import Commande from "./Commande";
import DarkVeil from "../Reactbits/DarkVeil/DarkVeil";
import TextType from '../Reactbits/TextType/TextType';
import ModalAboutMe from './modal/AboutMe/ModalAboutMe';
import ModalWork from './modal/Work/ModalWork';
import ModalSkills from './modal/Skills/ModalSkills';
import ModalGame from './modal/Game/ModalGame';
import ModalHireMe from './modal/HireMe/ModalHireMe';


function App() {

const [activeModal, setActiveModal] = useState(null);

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh' }}>

      {activeModal === 'about' && <ModalAboutMe isVisible={true} onClose={() => setActiveModal(null)} />}
      {activeModal === 'work' && <ModalWork isVisible={true} onClose={() => setActiveModal(null)} />}
      {activeModal === 'skills' && <ModalSkills isVisible={true} onClose={() => setActiveModal(null)} />}
      {activeModal === 'game' && <ModalGame isVisible={true} onClose={() => setActiveModal(null)} />}
      {activeModal === 'hire' && <ModalHireMe isVisible={true} onClose={() => setActiveModal(null)} />}

      <div className="title">
        <span className="label1">designer</span>
        <span className="name">Clément Righele</span>
        <span className="label2">&lt;coder&gt;</span>
      </div>
      
    
      <TextType 
        text={[
          "Bienvenue sur mon portfolio !",
          "Je suis Clément Righele Développeur en génie logiciel !",
          "Cliquez sur les touches du clavier pour interagir avec le site !"
        ]}
        typingSpeed={75}
        pauseDuration={2500}
        showCursor={true}
        cursorCharacter="|"
      />
      <Keyboard setActiveModal={setActiveModal}/>
      <DarkVeil />
      <Commande />
    </main>
  );
}

export default App;
