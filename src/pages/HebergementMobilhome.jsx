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
                    <h2>Mobil-Home</h2>
                    <p>
                        Découvrez le confort unique de nos mobilhomes, pensés pour vous offrir un séjour à la fois pratique, chaleureux et relaxant au cœur de la nature. Chaque mobilhome est soigneusement aménagé pour répondre à tous vos besoins : des chambres confortables avec des lits douillets pour des nuits reposantes, une cuisine entièrement équipée pour préparer vos repas comme à la maison, un espace salon lumineux où vous pourrez partager des moments conviviaux et une terrasse privative qui vous permettra de profiter pleinement du grand air et du paysage environnant.
                        Idéal pour les familles avec enfants, les couples en quête de tranquillité ou les groupes d’amis désireux de passer du temps ensemble, nos mobilhomes combinent intimité et convivialité. Vous pourrez facilement accéder à toutes les activités du camping, découvrir les sentiers naturels, vous détendre au bord de l’eau ou simplement profiter du calme et de la sérénité des lieux.
                        Nos mobilhomes allient confort moderne et atmosphère authentique, créant un équilibre parfait entre praticité et charme. Installez-vous, respirez profondément, laissez le chant des oiseaux et le souffle du vent vous accompagner et savourez chaque instant. Qu’il s’agisse d’un week-end ou d’un séjour prolongé, chaque moment dans nos mobilhomes devient une expérience unique : petits-déjeuners en terrasse, après-midis de détente avec un livre, soirées conviviales autour d’un repas ou moments de repos bien mérités après une journée d’aventure.
                    </p>

                    <button className="btn-reserver">Réserver</button>
                </article>

            </section>
            <Footer />
        </>
    )
}

export default MobilhomeReservation;