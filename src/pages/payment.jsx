import { useState, useEffect } from "react";
import "../styles/payment.css";
import NavBar from '../components/NavBar.jsx';
import Footer from "../components/footer";

export default function Payment() {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [price, setPrice] = useState(0);

  // Récupération du prix dynamique depuis l’URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const amount = params.get("price");
    if (amount) setPrice(Number(amount));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation paiement
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <>
        <NavBar />
    <div className="payment-container">
      <h1 className="payment-title">Paiement sécurisé (Fictif)</h1>

      <div className="payment-price">
        Total à payer : <span>{price.toFixed(2)} €</span>
      </div>

      {success ? (
        <div className="payment-success">
          <h2>Paiement validé ✔️</h2>
          <p>Votre réservation a bien été prise en compte.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="payment-form">

          <label>
            Nom sur la carte
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Numéro de carte
            <input
              type="text"
              name="cardNumber"
              maxLength={16}
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </label>

          <div className="payment-row">
            <label>
              Expiration
              <input
                type="text"
                name="expiry"
                placeholder="MM/AA"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              CVC
              <input
                type="text"
                name="cvc"
                maxLength={3}
                value={formData.cvc}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Traitement..." : `Payer ${price} €`}
          </button>
        </form>
      )}
    </div>
    <Footer />
  </>
  );
}