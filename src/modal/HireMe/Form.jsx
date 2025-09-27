import { useState } from "react";
import emailjs from '@emailjs/browser';
import "./form.css";

export default function Form({currentLang}) {
  let lang = 0;
  if (currentLang === 'en') {
    lang = 1;
  }

  const commands = [
        ['Nom', 'Name'],
        ['Société', 'Company'],
        ['Votre Message', 'Your Message'],
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
    emailjs.send("service_2ff5hyx","template_129uuum",{
      title: "Portfolio Contact",
      name: formData.name,
      company: formData.company,
      message: formData.message,
      email: formData.email,
    }, 'Y84FHvqCNJU87xz5l')
    .then(() => alert("Email envoyé !"))
    .catch(err => console.error("Erreur :", err));
  }


  return (
    <div className="form-wrapper">
    <div className="form-container">
      {/* Formulaire */}
      <form className="form" id="myForm" onSubmit={(e) => { e.preventDefault(); sendEmail(); }}>
        <label>
          {commands[0][lang]}
          <input
            type="text"
            placeholder={commands[0][lang]}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
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
        </label>

        <label>
          {commands[1][lang]}
          <input
            type="text"
            name="company"
            placeholder={commands[1][lang]}
            value={formData.company}
            onChange={handleChange}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            placeholder={commands[2][lang]}
            value={formData.message}
            onChange={handleChange}
          />
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

      <button type="submit" form="myForm" className="submit-button">Envoyer</button>
    </div>
    
    <div className="form-contact">
      <a href="mailto:clem.righ@gmail.com">Envoyer un mail</a>
    </div>
    

    </div>
  );
}
