import  { useState } from 'react';
import "../styles/contact.css";
import NavBar from '../components/NavBar';
import Footer from '../components/footer';

const Contact = () => {
  // --- GESTION DE L'ÉTAT (STATE) ---
  // On crée un objet 'formData' qui va contenir toutes les valeurs des champs.
  // Cela permet de tout centraliser.
  const [formData, setFormData] = useState({
    type: 'particulier', // Valeur par défaut
    civilite: '',
    raisonSociale: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresse: '',
    adresseSuite: '',
    codePostal: '',
    ville: '',
    pays: 'France',
    services: [], // Tableau pour les cases à cocher (plusieurs choix possibles)
    message: ''
  });

  // --- GESTION DES CHANGEMENTS (HANDLE CHANGE) ---
  // Cette fonction se déclenche à chaque fois que l'utilisateur écrit ou clique.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Si c'est une case à cocher (checkbox)
    if (type === 'checkbox') {
      setFormData((prev) => {
        // Si coché, on ajoute la valeur au tableau 'services'
        if (checked) {
          return { ...prev, services: [...prev.services, value] };
        } 
        // Si décoché, on enlève la valeur du tableau
        else {
          return { ...prev, services: prev.services.filter((service) => service !== value) };
        }
      });
    } 
    // Pour tous les autres champs (texte, radio, select)
    else {
      setFormData({
        ...formData, // On garde les anciennes valeurs
        [name]: value // On met à jour seulement le champ modifié
      });
    }
  };

  // --- GESTION DE L'ENVOI (SUBMIT) ---
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la page de se recharger
    console.log('Données envoyées :', formData);
    alert("Merci ! Votre message a bien été envoyé au camping.");
    // Ici, tu ajouterais plus tard la logique pour envoyer un email ou appeler une API
  };

  return (
    <>
    <NavBar />
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contactez-nous</h1>
        <p>Une question sur votre futur séjour ? Remplissez ce formulaire.</p>
        <small>* Champs obligatoires</small>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        
        {/* SECTION 1 : INFORMATIONS GÉNÉRALES */}
        <div className="form-section radio-section">
          {/* Groupe Type */}
          <div className="radio-group">
            <span className="label-title">Type* :</span>
            <label>
              <input type="radio" name="type" value="particulier" checked={formData.type === 'particulier'} onChange={handleChange} />
              Particulier
            </label>
            <label>
              <input type="radio" name="type" value="entreprise" checked={formData.type === 'entreprise'} onChange={handleChange} />
              Entreprise
            </label>
          </div>

          {/* Groupe Civilité */}
          <div className="radio-group">
            <span className="label-title">Civilité* :</span>
            <label>
              <input type="radio" name="civilite" value="M." onChange={handleChange} required />
              M.
            </label>
            <label>
              <input type="radio" name="civilite" value="Mme" onChange={handleChange} />
              Mme
            </label>
          </div>
        </div>

        {/* SECTION 2 : COORDONNÉES (GRILLE) */}
        {/* J'utilise une grille CSS pour mettre les champs côte à côte comme sur ton image */}
        <div className="form-grid">
          
          <div className="form-group">
            <label htmlFor="raisonSociale">Raison Sociale :</label>
            <input type="text" id="raisonSociale" name="raisonSociale" value={formData.raisonSociale} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="adresse">Adresse :</label>
            <input type="text" id="adresse" name="adresse" value={formData.adresse} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="nom">Nom* :</label>
            <input type="text" id="nom" name="nom" required value={formData.nom} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="adresseSuite">Adresse (suite) :</label>
            <input type="text" id="adresseSuite" name="adresseSuite" value={formData.adresseSuite} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="prenom">Prénom* :</label>
            <input type="text" id="prenom" name="prenom" required value={formData.prenom} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="codePostal">Code Postal* :</label>
            <input type="text" id="codePostal" name="codePostal" value={formData.codePostal} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email* :</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="ville">Ville* :</label>
            <input type="text" id="ville" name="ville" value={formData.ville} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone :</label>
            <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="pays">Pays :</label>
            <select id="pays" name="pays" value={formData.pays} onChange={handleChange}>
              <option value="France">France</option>
              <option value="Belgique">Belgique</option>
              <option value="Suisse">Suisse</option>
              <option value="Canada">Canada</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
        </div>

        {/* SECTION 3 : OBJET DU CONTACT */}
        <div className="form-full-width">
          <h3>Objet de votre prise de contact</h3>
          <p className="subtitle">Veuillez indiquer le(s) service(s) que vous souhaitez contacter* :</p>
          
          <div className="checkbox-list">
            <label className="checkbox-item">
              <input type="checkbox" name="services" value="guides" onChange={handleChange} />
              Le service guides (déclaration, mise à jour...)
            </label>
            <label className="checkbox-item">
              <input type="checkbox" name="services" value="publicite" onChange={handleChange} />
              Le service publicité (annonces, liens...)
            </label>
            <label className="checkbox-item">
              <input type="checkbox" name="services" value="partenariats" onChange={handleChange} />
              Le service partenariats du site
            </label>
            <label className="checkbox-item">
              <input type="checkbox" name="services" value="internet" onChange={handleChange} />
              Le service internet / webmaster (problème technique)
            </label>
          </div>
        </div>

        {/* SECTION 4 : MESSAGE */}
        <div className="form-full-width">
          <label htmlFor="message">Votre message* :</label>
          <textarea 
            id="message" 
            name="message" 
            rows="6" 
            required 
            value={formData.message} 
            onChange={handleChange}
            placeholder="Écrivez votre message ici..."
          ></textarea>
        </div>

        {/* BOUTON D'ENVOI */}
        <div className="submit-container">
          <button type="submit" className="btn-submit">Envoyer le message</button>
        </div>

      </form>
    </div>
    <Footer />
    </>
  );
};

export default Contact;