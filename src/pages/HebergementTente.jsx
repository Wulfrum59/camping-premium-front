import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import tente1 from "../assets/hebergement/tente1.jpg";
import tente2 from "../assets/hebergement/tente2.jpg";
import tente3 from "../assets/hebergement/tente3.jpg";
import tente4 from "../assets/hebergement/tente4.jpg";
import "../styles/tente.css";
import Reservation from "../components/Reservation";

function HebergementTente() {
  const hebergementId = 1;

  return (
    <>
      <Navbar />
      <section className="logement-container">
        <div className="logement-gauche">
          <div className="img1">
            <img src={tente1} alt="photo 1" />
          </div>
          <div className="group2-3">
            <div className="img2">
              <img src={tente2} alt="photo 2" />
              <img src={tente3} alt="photo 3" />
            </div>
            <div className="img3">
              <img src={tente4} alt="photo 4" />
            </div>
          </div>
        </div>

        <article className="logement-droite">
          <h2>Tente de camping</h2>
          <p>
            Plongez au cœur de la nature en séjournant dans nos tentes de camping confortables et accueillantes. Idéales pour une expérience authentique en plein air, elles offrent tout le nécessaire pour profiter d’un séjour simple, chaleureux et reposant. Installées dans un environnement calme et verdoyant, nos tentes sont pensées pour vous faire vivre un moment hors du temps.
          </p>

          <div className="reservation-container">
            <Reservation hebergementId={hebergementId} />
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default HebergementTente;
