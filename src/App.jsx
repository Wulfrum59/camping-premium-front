import { useState, useEffect } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';

function App() {
  const [hebergements, setHebergements] = useState([]);

  useEffect(() => {
    fetch("https://localhost:3000/api/hebergements")
      .then(response => response.json())
      .then(data => setHebergements(data))
      .catch(error => console.error("Erreur lors de la récupération des hébergements :", error));
  }, []);

  return (
    <>
      <Navbar />

      {/* Bannière */}
      <section className="img">
        <img src='src/assets/photo couverture.jpg' alt='Camping' className="img-cover" />

        <div className="reservation-box">
          <h2>Réservez votre séjour</h2>
          <form className="reservation-form">
            <div className="form-field">
              <label>Nombre de personnes</label>
              <input className="n-p" type="number" min="1" placeholder="Nombre de personnes" />
            </div>

            <div className="form-field">
              <label>Date d'arrivée</label>
              <input type="date" />
            </div>

            <div className="form-field">
              <label>Date de départ</label>
              <input type='date' />
            </div>

            <button type="submit">Rechercher</button>
          </form>
        </div>
      </section>

      {/* Section Hébergements */}
      <section className="hebergements-section">
        <h2 className="hebergements-title">Hébergements en fonction des saisons</h2>

        <div className="hebergements-cards">

          <div className="card-hebergement">
            <img src='src/assets/Tente.jpeg' alt="Tente" />
            <h3>Tente</h3>
            <button className="btn-card" onClick={() => window.location.href = "/hebergement"}>Découvrir</button>
          </div>

          <div className="card-hebergement">
            <img src="src/assets/mobilehome.jpg" alt="Mobil-home" />
            <h3>Mobil-home</h3>
            <button className="btn-card" onClick={() => window.location.href = "/hebergement"}>Découvrir</button>
          </div>

          <div className="card-hebergement">
            <img src="src/assets/borddemer.jpg" alt="Studio en bord de mer" />
            <h3>Studio en bord de mer</h3>
            <button className="btn-card" onClick={() => window.location.href = "/hebergement"}>Découvrir</button>
          </div>

          <div className="card-hebergement">
            <img src="src/assets/chalet.jpg" alt="Chalet" />
            <h3>Chalet</h3>
            <button className="btn-card" onClick={() => window.location.href = "/hebergement"}>Découvrir</button>
          </div>

        </div>
      </section>
      {/* Section Présentation */}
      <section className="presentation-section">
        <h2 className="presentation-title">Bienvenue au ForEach Camping</h2>
        <p className="presentation-text">
          Découvrez un lieu où nature, confort et liberté se rencontrent. Tout au long de l’année, nous vous proposons des hébergements adaptés à chaque saison : cabanes chaleureuses pour l’hiver, tentes et lodges pour l’été, chalets adaptés au printemps et à l’automne.

          Que vous cherchiez une escapade en famille, un séjour détente ou une aventure pleine d’air frais,notre camping vous offre un cadre idéal pour vivre des moments authentiques et mémorables.
        </p>
      </section>
        
              <section className="services-bar">
            <div className="service-item">
            <img src="src/assets/ambiance.jpg" alt="Ambiance familiale" className="service-icon" />
            <p>Ambiance familiale & conviviale</p>
  </div>
          
            <div className="service-item">
            <img src="src/assets/accueil.jpg" alt="Écoute" className="service-icon" />
            <p>Écoute et accueil</p>
  </div>
          
            <div className="service-item">
            <img src="src/assets/paiement.jpg" alt="Facilité de paiement" className="service-icon" />
            <p>Facilité de paiement</p>
  </div>
          
            <div className="service-item">
            <img src="src/assets/Animaux.jpg" alt="Animaux acceptés" className="service-icon" />
            <p>Animaux autorisés</p>
          </div>
</section>
        
                                        {/* Section Footer */}
        
          <footer className="footer">
  <div className="footer-container">

    {/* Colonne Logo */}
    <div className="footer-column">
      <img src="src/assets/logo.png" alt="Logo Camping" className="footer-logo" />
    </div>

    {/* Colonne services */}
    <div className="footer-column">
      <h3>Services & conditions</h3>
      <ul>
        <li><a href="#">Conditions Générales</a></li>
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#">Politique de confidentialité</a></li>
      </ul>
    </div>

    {/* Colonne paiement */}
    <div className="footer-column">
      <h3>Moyens de paiement</h3>

      <div className="payment-security">
        {/* Icône cadenas en SVG */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
          <path d="M6 10V8a6 6 0 1112 0v2" />
          <rect x="4" y="10" width="16" height="12" rx="2" />
        </svg>
        <span>Paiement 100% sécurisé</span>
      </div>

      <div className="payment-icons">
        {/* Visa */}
        <svg width="45" height="25" viewBox="0 0 48 20">
          <rect width="48" height="20" rx="3" fill="#fff" stroke="#000" />
          <text x="10" y="14" fontSize="10" fill="#000">VISA</text>
        </svg>

        {/* Paypal */}
        <svg width="50" height="25" viewBox="0 0 48 20">
          <rect width="48" height="20" rx="3" fill="#fff" stroke="#000" />
          <text x="6" y="14" fontSize="10" fill="#000">PayPal</text>
        </svg>

        {/* Mastercard */}
        <svg width="50" height="25" viewBox="0 0 48 20">
          <rect width="48" height="20" rx="3" fill="#fff" stroke="#000" />
          <circle cx="20" cy="10" r="6" fill="none" stroke="#000"/>
          <circle cx="28" cy="10" r="6" fill="none" stroke="#000"/>
        </svg>
      </div>
    </div>

    {/* Colonne réseaux sociaux */}
    <div className="footer-column">
      <h3>Réseaux sociaux</h3>

      <div className="social-icons">

        {/* Facebook */}
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M14 8h-2a2 2 0 00-2 2v2H8v2h2v4h2v-4h2l1-2h-3v-2a1 1 0 011-1h2z"/>
        </svg>

        {/* YouTube */}
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
          <rect x="3" y="7" width="18" height="10" rx="3"/>
          <polygon points="10,9 16,12 10,15" fill="#000"/>
        </svg>

        {/* Instagram */}
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17" cy="7" r="1"/>
        </svg>

        {/* X (Twitter) */}
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
          <path d="M4 4l16 16M20 4L4 20"/>
        </svg>

      </div>
    </div>
  </div>
</footer>


    </>
  );
}


export default App;
