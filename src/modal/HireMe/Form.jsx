import { useState } from "react";
import emailjs from '@emailjs/browser';
import "./form.css";

function Form({currentLang}) {
  const lang = currentLang === "fr" ? 0 : 1;

  const [errorNameEmpty, setErrorNameEmpty] = useState("")
  const [errorMailInvalid, setMailInvalid] = useState("")
  const [errorMailEmpty, setErrorMailEmpty] = useState("")
  const [errorMessageEmpty, setErrorMessageEmpty] = useState("")
  
  const traduction = [
        ['Nom Prénom', 'Last Name First Name'],
        ['Société', 'Company'],
        ['Votre Message', 'Your Message'],
        ['Envoyer', 'Send'],
        ['Envoyer un mail : clem.righ@gmail.com', 'Send an email : clem.righ@gmail.com'],
        ['Nom vide !', 'Name empty!'],
        ['Email vide !', 'Email empty!'],
        ['Email invalide !', 'Invalid email!'],
        ['Message vide !', 'Message empty!'],
      ]
      
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function sendEmail() {
    if (formData.name && formData.email && /\S+@\S+\.\S+/.test(formData.email) && formData.message) {
    emailjs.send("service_2ff5hyx","template_129uuum",{
      title: "Portfolio Contact",
      name: formData.name,
      company: formData.company,
      message: formData.message,
      email: formData.email,
    }, 'Y84FHvqCNJU87xz5l')
    .then(() => alert("Email envoyé !"))
    .catch(err => console.error("Erreur :", err));
    } else {
      if (!formData.name) setErrorNameEmpty(traduction[5][lang])
      else setErrorNameEmpty("")
      if (!formData.email) setErrorMailEmpty(traduction[6][lang]) 
      else setErrorMailEmpty("")
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) setMailInvalid(traduction[7][lang]) 
      else setMailInvalid("")
      if (!formData.message) setErrorMessageEmpty(traduction[8][lang]) 
      else setErrorMessageEmpty("")
    }
  }


  return (
    <div className="form-wrapper">
    <div className="form-container">
      {/* Formulaire */}
      <form className="form" id="myForm" onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
        <label>
          {traduction[0][lang]}
          <input
            type="text"
            placeholder={traduction[0][lang]}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label id="nameLabel" className={errorNameEmpty ? "error-label" : ""}> {errorNameEmpty || ""} </label>
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <label id="emailLabel" className={errorMailInvalid ? "error-label" : ""}> {errorMailInvalid || ""} </label>
          <label id="emailLabel" className={errorMailEmpty ? "error-label" : ""}> {errorMailEmpty || ""} </label>
        </label>

        <label>
          {traduction[1][lang]}
          <input
            type="text"
            name="company"
            placeholder={traduction[1][lang]}
            value={formData.company}
            onChange={handleChange}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            placeholder={traduction[2][lang]}
            value={formData.message}
            onChange={handleChange}
          />
          <label id="messageLabel" className={errorMessageEmpty ? "error-label" : ""}> {errorMessageEmpty || ""} </label>
        </label>
      </form>

      {/* JSON */}
      <pre className="json">
        {JSON.stringify(
          {
            name: formData.name,
            email: {
              value: formData.email,
              valid: /\S+@\S+\.\S+/.test(formData.email),
            },
            company: formData.company,
            message: formData.message,
          },
          null,
          2
        )}
      </pre>

      <button type="submit" form="myForm" className="submit-button">{traduction[3][lang]}</button>
    </div>
    
    <div className="form-contact">
      <a href="mailto:clem.righ@gmail.com">{traduction[4][lang]}</a>
    </div>
    

    </div>
  );
}

export default Form;