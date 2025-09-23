import './commande.css'

function Commande({ currentLang }) {

  const commands = currentLang === 'fr'
    ? [
        ['Esc', 'CV'],
        ['L', 'Linkedin'],
        ['Entrée', 'Hire Me'],
        ['S', 'Skills'],
        ['A', 'About Me'],
        ['F', 'Game'],
        ['W', 'Work'],
        ['G', 'GitHub'],
        ['Supprimer', 'Fermer le modal'],
      ]
    : [
        ['Esc', 'Resume'],
        ['L', 'Linkedin'],
        ['Enter', 'Hire Me'],
        ['S', 'Skills'],
        ['A', 'About Me'],
        ['F', 'Game'],
        ['W', 'Work'],
        ['G', 'GitHub'],
        ['Delete', 'Close modal'],
      ]

  return (
    <div className="commande">
      <div><b>{currentLang === 'fr' ? 'Commandes Clavier' : 'Keyboard Commands'}</b></div>
      {commands.map(([key, action]) => (
        <div key={key}>
          <b>{key}</b> : {action}
        </div>
      ))}
    </div>
  )
}

export default Commande
