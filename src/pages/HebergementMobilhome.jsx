import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import mobilhome1 from "../assets/hebergement/mobilhome1.jpg";
import mobilhome2 from "../assets/hebergement/mobilhome2.jpg";
import mobilhome3 from "../assets/hebergement/mobilhome3.jpg";
import mobilhome4 from "../assets/hebergement/mobilhome4.jpg";
import "../styles/tente.css"
function MobilhomeReservation() {
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
                    <h2>Tente de camping</h2>
                    <p>
                        Plongez dans le confort et la praticité de nos mobilhomes, conçus pour offrir un séjour agréable et relaxant en pleine nature. Chaque mobilhome est entièrement équipé pour que vous n’ayez à vous soucier de rien : chambres confortables, cuisine fonctionnelle, espace salon lumineux et terrasse privative pour profiter du plein air. Idéal pour les familles, les couples ou les amis, nos mobilhomes combinent intimité et convivialité, tout en vous permettant de rester proches des activités du camping et de la beauté naturelle environnante. Installez-vous, détendez-vous et laissez-vous séduire par le charme d’un hébergement qui allie confort moderne et atmosphère authentique. Que vous passiez une nuit ou une semaine, chaque instant dans nos mobilhomes est une invitation à la détente, au partage et à la découverte.
                    </p>

                    <button className="btn-reserver">Réserver</button>
                </article>

            </section>
            <Footer />
        </>
    )
}

export default MobilhomeReservation;