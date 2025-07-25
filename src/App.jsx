import Keyboard from "./Keyboard";
import DarkVeil from "../Reactbits/DarkVeil/DarkVeil";
import TextType from '../Reactbits/TextType/TextType';

function App() {
  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh' }}>
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

      <Keyboard />
      <DarkVeil />
    </main>
  );
}

export default App;
