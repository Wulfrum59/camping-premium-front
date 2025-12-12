import { useState } from "react"; 
import NavBar from '../components/NavBar.jsx';
import Footer from "../components/Footer.jsx";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
  };

 
    return (
  <>
    <NavBar />

    <div>
      <h1>Contactez-nous</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nom">Nom</label>
          <input
            id="nom"
            name="nom"
            type="text"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="prenom">Prénom</label>
          <input
            id="prenom"
            name="prenom"
            type="text"
            value={formData.prenom}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>

    <Footer />
  </>
);


}

export { ContactForm };