import { useState } from "react";
import reservationService from "../services/reservation.service";
import "../styles/tente.css"; // on réutilise ton CSS existant

function Reservation({ hebergementId }) {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    dateDebut: "",
    dateFin: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      const response = await reservationService.create({
        ...formData,
        hebergementId,
      });

      setSuccess(response.data.message);

      // reset form
      setFormData({
        nom: "",
        email: "",
        dateDebut: "",
        dateFin: "",
      });
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Erreur serveur");
      }
    }
  };

  return (
    <div className="reservation-form">
      <h3>Réservez votre séjour</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dateDebut"
          value={formData.dateDebut}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dateFin"
          value={formData.dateFin}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn-reserver">
          Réserver
        </button>
      </form>

      {success && <p className="reservation-success">{success}</p>}
      {error && <p className="reservation-error">{error}</p>}
    </div>
  );
}

export default Reservation;
