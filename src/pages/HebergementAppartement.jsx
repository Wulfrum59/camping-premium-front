import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import appartement1 from "../assets/hebergement/appartement1.jpg";
import appartement2 from "../assets/hebergement/appartement2.jpg";
import appartement3 from "../assets/hebergement/appartement3.jpg";
import appartement4 from "../assets/hebergement/appartement4.jpg";
import "../styles/tente.css"
function AppartementReservation() {
    return (
        <>
            <Navbar />
            <section className="logement-container">

                <div className="logement-gauche">
                    <div className="img1">
                        <img src={appartement1} alt="photo 1" />

                    </div>
                    <div className="group2-3">
                        <div className="img2">
                            <img src={appartement2} alt="photo 2" />
                            <img src={appartement3} alt="photo 3" />

                        </div>
                        <div className="img3">
                            <img src={appartement4} alt="photo 4" />

                        </div>

                    </div>
                </div>

                <article className="logement-droite">
                    <h2>Studio</h2>
                    <p>
                        Découvrez le confort et l’élégance de nos appartements, pensés pour vous offrir un séjour pratique, chaleureux et reposant au cœur de notre camping. Chaque appartement est aménagé avec soin : chambres confortables, salon lumineux, cuisine équipée et espace repas, le tout dans un cadre fonctionnel et convivial. Profitez d’un espace privatif pour vous détendre, lire un livre, partager un repas ou simplement contempler la nature environnante depuis votre terrasse ou balcon.
                        Idéal pour les familles, les couples ou les petits groupes d’amis, nos appartements allient intimité et confort moderne, vous permettant de profiter pleinement de votre séjour tout en restant proches des activités et des installations du camping. Que vous passiez quelques nuits ou une semaine entière, chaque instant devient une invitation à la détente et à la sérénité.
                        Installez-vous, respirez l’air frais, laissez-vous porter par l’ambiance paisible du camping et savourez chaque moment. Nos appartements vous offrent tout le nécessaire pour un séjour simple et agréable, alliant confort et proximité avec la nature. Entre balades, moments de repos et instants partagés, votre séjour dans nos appartements sera synonyme de bien-être, de convivialité et de souvenirs inoubliables.
                    </p>

                    <button className="btn-reserver">Réserver</button>
                </article>

            </section>
            <Footer />
        </>
    )
}

export default AppartementReservation;