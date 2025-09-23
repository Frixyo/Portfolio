import './langbutton.css'

const LangButton = ({ currentLang, onChangeLang }) => {

  const buttonText = {
    en: 'English',
    fr: 'Français',
  };

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    onChangeLang(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="langbutton">
      {buttonText[currentLang]}
    </button>
  );
};

export default LangButton;
