import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import maison1 from "../assets/hebergement/maison1.jpg";
import maison2 from "../assets/hebergement/maison2.jpg";
import maison3 from "../assets/hebergement/maison3.jpg";
import maison4 from "../assets/hebergement/maison4.jpg";
import "../styles/tente.css";
import Reservation from "../components/Reservation";

function HebergementMaison() {
  const hebergementId = 3;

  return (
    <>
      <Navbar />
      <section className="logement-container">
        <div className="logement-gauche">
          <div className="img1">
            <img src={maison1} alt="photo 1" />
          </div>
          <div className="group2-3">
            <div className="img2">
              <img src={maison2} alt="photo 2" />
              <img src={maison3} alt="photo 3" />
            </div>
            <div className="img3">
              <img src={maison4} alt="photo 4" />
            </div>
          </div>
        </div>

        <article className="logement-droite">
          <h2>Chalet</h2>
          <p>
            Plongez dans le confort et l’espace généreux de nos maisons, conçues pour offrir un séjour agréable et relaxant pour toute la famille ou un groupe d’amis. Chaque maison est soigneusement aménagée pour répondre à tous vos besoins : chambres spacieuses avec des lits confortables, salon lumineux, cuisine équipée et espace repas chaleureux. Certaines maisons disposent également d’une terrasse ou d’un jardin privatif, idéal pour profiter pleinement du plein air et de la beauté naturelle qui entoure le camping.
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

export default HebergementMaison;
