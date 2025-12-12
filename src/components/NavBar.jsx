function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar w-100">
      <div className="container-fluid d-flex align-items-center">
        {/* Logo à gauche */}
        <a className="navbar-brand" href="/">
          <img
            src="src/assets/logo.png"
            alt="Camping"
            height="55"
            className="rounded-circle logo-style"
          />
        </a>

        {/* Liens centrés */}
        <ul className="navbar-nav d-flex flex-row mx-auto gap-3">
          <li className="nav-item">
            <a className="nav-link nav-btn" onClick={() => (window.location.href = "/")}>
              Accueil
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-btn"
              onClick={() => (window.location.href = "/hebergements")}
            >
              Hébergements
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-btn"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Boutons tout à droite */}
        <div className="d-flex gap-2">
          {user ? (
            <>
              <a className="nav-btn-login" onClick={() => (window.location.href = "/dashboard")}>
                Mon compte
              </a>
              <a className="nav-btn-login" onClick={handleLogout}>
                Déconnexion
              </a>
            </>
          ) : (
            <>
              <a className="nav-btn-login" onClick={() => (window.location.href = "/register")}>
                Inscription
              </a>
              <a className="nav-btn-login" onClick={() => (window.location.href = "/login")}>
                Connexion
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
