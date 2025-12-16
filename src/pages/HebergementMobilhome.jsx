import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import mobilhome1 from "../assets/hebergement/mobilhome1.jpg";
import mobilhome2 from "../assets/hebergement/mobilhome2.jpg";
import mobilhome3 from "../assets/hebergement/mobilhome3.jpg";
import mobilhome4 from "../assets/hebergement/mobilhome4.jpg";
import "../styles/tente.css";
import Reservation from "../components/Reservation";

function HebergementMobilhome() {
  const hebergementId = 4;

  return (
    <>
      <Navbar />
      <section className="logement-container">
        <div className="logement-gauche">
          <div className="img1">
            <img src={mobilhome1} alt="photo 1" />
          </div>
          <div className="group2-3">
            <div className="img2">
              <img src={mobilhome2} alt="photo 2" />
              <img src={mobilhome3} alt="photo 3" />
            </div>
            <div className="img3">
              <img src={mobilhome4} alt="photo 4" />
            </div>
          </div>
        </div>

        <article className="logement-droite">
          <h2>Mobil-Home</h2>
          <p>
            Découvrez le confort unique de nos mobilhomes, pensés pour vous offrir un séjour pratique, chaleureux et relaxant au cœur de la nature. Chaque mobilhome est soigneusement aménagé pour répondre à tous vos besoins : chambres confortables, cuisine équipée, espace salon lumineux et terrasse privative.
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

export default HebergementMobilhome;
