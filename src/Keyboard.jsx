import { useRef, useEffect } from 'react'
import Spline from '@splinetool/react-spline'

function Keyboard({ activeModal, setActiveModal }) {
  const splineRef = useRef(null)

  const modalMap = {
    // CV
    'a5c5d194-53e6-4206-ac02-5000aa34f6e0': () => window.open('CV-Righele.pdf', '_blank', 'noopener noreferrer'),

    // Linkedin
    'a2a453d5-d23b-4447-a09a-885ee99b91f0': () => window.open('https://www.linkedin.com/in/cl%C3%A9ment-righele/', '_blank', 'noopener noreferrer'),

    // Hire Me
    '85e2fbad-9b63-4f63-824f-056102ee7f1c': () => setActiveModal('hire'),

    // Skills
    '031eeb0d-6869-4915-a4e0-e3066a09bca3': () => setActiveModal('skills'),

    // About Me
    '0b96e619-0e9e-4e96-b02a-3a86146d1fe6': () => setActiveModal('about'),

    // Game
    '6e7eb177-5c49-47e0-911b-6e46b360f192': () => setActiveModal('game'),

    // Work
    '82a8c17a-395f-40a4-b63d-09d1b86a8818': () => setActiveModal('work'),

    // GitHub
    '74ebb245-6386-400e-9c12-0b4efb53b933': () => window.open('https://github.com/frixyo', '_blank', 'noopener noreferrer'),
  }

  // Gestion clics souris
  useEffect(() => {
    const obj = splineRef.current
    if (!obj) return

    function handleSplineMouseUp(e) {
      const id = e.target.id
      modalMap[id]?.()
    }

    obj.addEventListener('mouseUp', handleSplineMouseUp)
    return () => obj.removeEventListener('mouseUp', handleSplineMouseUp)
  }, [setActiveModal])

  // Gestion clics clavier
  useEffect(() => {
    function handleKeyUp(e) {

      const keyMap = {
        l: 'a2a453d5-d23b-4447-a09a-885ee99b91f0',      // Linkedin
        Enter: '85e2fbad-9b63-4f63-824f-056102ee7f1c',  // Hire Me
        s: '031eeb0d-6869-4915-a4e0-e3066a09bca3',      // Skills
        a: '0b96e619-0e9e-4e96-b02a-3a86146d1fe6',      // About
        f: '6e7eb177-5c49-47e0-911b-6e46b360f192',      // Game
        w: '82a8c17a-395f-40a4-b63d-09d1b86a8818',      // Work
        g: '74ebb245-6386-400e-9c12-0b4efb53b933',      // GitHub
      }

      if (e.key === 'Escape') {
        if (activeModal) {
          setActiveModal(null)
        } else {
          modalMap['a5c5d194-53e6-4206-ac02-5000aa34f6e0']?.()
        }
        return
      }

      if (activeModal) return

      const id = keyMap[e.key]
      if (id) {
        modalMap[id]?.()
      }
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [activeModal, setActiveModal])

  return (
    <Spline
      scene="https://prod.spline.design/XhoffCB6c3sDnGNr/scene.splinecode"
      ref={splineRef}
      style={{ width: '100%', height: '90%', position: 'relative', zIndex: 100 }}
    />
  )
}

export default Keyboard
