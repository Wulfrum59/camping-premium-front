import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/api/auth/login", {
                email,
                password,
            });


            // Stockage du token et des infos utilisateur
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            // Redirection vers la page utilisateur
            window.location.href = "/user";
        } catch (err) {
            console.error("Erreur login :", err.response?.data || err);
            alert("Email ou mot de passe incorrect");
        }
    };

    return (
        <>
            <NavBar />
            <div className="login-container">
                <h2>Connexion</h2>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-primary">
                        Se connecter
                    </button>
                </form>

                <div className="register-link">
                    <a href="/register">Pas encore de compte ? Inscrivez-vous ici.</a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
