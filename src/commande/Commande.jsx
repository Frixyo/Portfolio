import './commande.css'

function Commande({ currentLang }) {

  const commands = currentLang === 'fr'
    ? [
        ['Esc', 'CV'],
        ['L', 'Linkedin'],
        ['Entrée', 'Contactez Moi'],
        ['S', 'Mes compétences'],
        ['A', 'À propos de moi'],
        ['F', 'Jeux'],
        ['W', 'Mes Projets'],
        ['G', 'GitHub'],
      ]
    : [
        ['Esc', 'Resume'],
        ['L', 'Linkedin'],
        ['Enter', 'Contact Me'],
        ['S', 'Skills'],
        ['A', 'About Me'],
        ['F', 'Game'],
        ['W', 'Works'],
        ['G', 'GitHub'],
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
