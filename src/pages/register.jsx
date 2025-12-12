import React from "react";
import "../styles/register.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Register () {
    return (
        <>
        <NavBar />
        <div className="register-container">
            <h2>Inscription</h2>
            <form className="register-form">
                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" id="nom" name="nom" required />
                </div>
                <div className="form-group">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" id="prenom" name="prenom" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="adresse">Adresse postale</label>
                    <input type="text" id="adresse" name="adresse" required />
                </div>
                <div className="form-group">
                    <label htmlFor="codePostal">Code postal</label>
                    <input type="text" id="codePostal" name="codePostal" required />
                </div>
                <div className="form-group">
                    <label htmlFor="telephone">Numéro de téléphone</label>
                    <input type="tel" id="telephone" name="telephone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="dateNaissance">Date de naissance</label>
                    <input type="date" id="dateNaissance" name="dateNaissance" required />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
        </div>
        <Footer />
        </>
    );
}

export default Register;