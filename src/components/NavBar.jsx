import React from "react";

function Navbar() {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark custom-navbar w-100">
  <div className="container-fluid d-flex align-items-center">
    
    {/* Logo à gauche */}
    <a className="navbar-brand" href="/">
      <img src="src\assets\logo.png" alt="Camping" height="55" className="rounded-circle logo-style"/>
    </a>

    {/* Liens centrés */}
    <ul className="navbar-nav d-flex flex-row mx-auto gap-3">
      <li className="nav-item">
        <a className="nav-link nav-btn" href="/">Accueil</a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-btn" href="/hebergements">Hébergements</a>
      </li>
      <li className="nav-item">
        <a className="nav-link nav-btn" href="/contact">Contact</a>
      </li>
    </ul>

    {/* Bouton Connexion tout à droite */}
    <div className="d-flex">
      <a className="nav-btn-login " href="/login">Connexion</a>
    </div>

  </div>
</nav>

    );
}

export default Navbar;
