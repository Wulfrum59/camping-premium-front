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
                    <h2>Tente de camping</h2>
                    <p>
                        Plongez au cœur de la nature en séjournant dans nos tentes de camping confortables et accueillantes. Idéales pour vivre une expérience authentique en plein air, elles offrent tout le nécessaire pour profiter d’un séjour simple, chaleureux et reposant. Installées dans un environnement calme et verdoyant, nos tentes sont pensées pour vous faire vivre un moment hors du temps, loin du stress et du rythme quotidien.
                        Que vous voyagiez en couple, en famille ou entre amis, vous apprécierez l’équilibre parfait entre le charme du camping traditionnel et la tranquillité d’un hébergement bien équipé. Chaque tente dispose d’un espace spacieux, d’un couchage confortable et est située à proximité de toutes les commodités du camping. Réveillez-vous avec le chant des oiseaux, respirez l’air frais du matin et laissez-vous envelopper par la douceur du vent dans les arbres.
                        Au fil de la journée, profitez des sentiers environnants, détendez-vous à l’ombre ou partagez des moments conviviaux autour d’un repas en plein air. Le soir venu, laissez-vous bercer par la sérénité des lieux et admirez le ciel étoilé pour une parenthèse apaisante et mémorable. Nos tentes de camping sont l’occasion parfaite de se reconnecter à la nature, de vivre des instants simples mais précieux, et de savourer chaque moment d’une véritable escapade en plein air.
                    </p>

                    <button className="btn-reserver">Réserver</button>
                </article>

            </section>
            <Footer />
        </>
    )
}

export default AppartementReservation;