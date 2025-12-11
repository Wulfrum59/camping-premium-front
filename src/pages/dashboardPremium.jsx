import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import "../styles/dashboardPremium.css";

function DashboardPremium() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Pas connecté → redirection vers login
      window.location.href = "/login";
      return;
    }

    // Récupération des infos utilisateur depuis le backend
    axios
      .get("http://localhost:3000/api/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error(err);
        alert("Erreur lors de la récupération des informations utilisateur.");
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  if (!user) return <p>Chargement...</p>;

  return (
    <>
      <NavBar />

      <div className="dashboard-page">
        <h1>Bienvenue {user.first_name} </h1>

        <div className="user-card">
          <p><strong>Prénom :</strong> {user.first_name}</p>
          <p><strong>Nom :</strong> {user.last_name}</p>
          <p><strong>Email :</strong> {user.email}</p>
          <p><strong>Adresse :</strong> {user.address}</p>
          <p><strong>Téléphone :</strong> {user.phone}</p>
          <p><strong>Date de naissance :</strong> {user.birth_date}</p>
        </div>

        <button className="btn-logout" onClick={handleLogout}>
          Se déconnecter
        </button>
      </div>

      <Footer />
    </>
  );
}

export default DashboardPremium;
