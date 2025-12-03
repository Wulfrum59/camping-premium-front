import React from "react";
import "../styles/login.css";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function Login() {
    return (
        <>
        <NavBar /> 
        <div className="login-container">
            <h2>Connexion</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Se connecter</button>
            </form>
            <div className="register-link">
                <a href="/register">Pas encore inscrit ?</a>
            </div>
        </div>
        <Footer />
        </>

    );
}

export default Login;