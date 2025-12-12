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

      <div className="formulaire">
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


      <div className="coordonnees">
        <h2>Nos coordonnées</h2>
        <hr />
        <div className="coord-container">


          <div className="coord-item">
            <span className="icon">🏠</span>
            <div>
              <h3>Camping FEA :</h3>
              <p>12 Route du Lac des Amandiers</p>
              <p>63240 Mont-Dorval</p>
              <p>France</p>
            </div>
          </div>


          <div className="coord-item">
            <span className="icon">📞</span>
            <div>
              <h3>Numéro de téléphone :</h3>
              <p>04 72 58 91 34</p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
