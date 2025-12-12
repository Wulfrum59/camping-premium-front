function Footer() {
  return (
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
  );
}

export default Footer;
