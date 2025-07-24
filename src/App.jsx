import { useState } from 'react'
import Spline from '@splinetool/react-spline'


function App() {
  const [message, setMessage] = useState('Aucun clic détecté')

  function handleSplineMouseUp(e) {
    console.log('Event reçu:', e.target.name, e.target.id)
    setMessage(`Objet cliqué : ${e.target.name}`)


    if (e.target.id == 'a5c5d194-53e6-4206-ac02-5000aa34f6e0') {
      window.open("CV-RIGHELEClément-ETS.pdf", "_blank");
    }

    if (e.target.id == 'a2a453d5-d23b-4447-a09a-885ee99b91f0') {
      window.open("https://www.linkedin.com/in/cl%C3%A9ment-righele/", "_blank");
    }

    if (e.target.id == '85e2fbad-9b63-4f63-824f-056102ee7f1c') {
      // Hire me button
    }
    
    if (e.target.id == '85e2fbad-9b63-4f63-824f-056102ee7f1c') {
      // Connaissance button
    }

    if (e.target.id == '85e2fbad-9b63-4f63-824f-056102ee7f1c') {
      // About me button
    }

    if (e.target.id == '85e2fbad-9b63-4f63-824f-056102ee7f1c') {
      // Game button
    }

    if (e.target.id == '85e2fbad-9b63-4f63-824f-056102ee7f1c') {
      // Work button
    }

    if (e.target.id == '74ebb245-6386-400e-9c12-0b4efb53b933') {
      window.open("https://github.com/frixyo", "_blank");
    }
  }

  return (
    <main style={{ width: '100vw', height: '100vh' }}>
      <Spline
        scene="https://prod.spline.design/XhoffCB6c3sDnGNr/scene.splinecode"
        onSplineMouseUp={handleSplineMouseUp}
      />
    </main>
  )
}

export default App;
