import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import tente1 from "../assets/hebergement/tente1.jpg";
import tente2 from "../assets/hebergement/tente2.jpg";
import tente3 from "../assets/hebergement/tente3.jpg";
import tente4 from "../assets/hebergement/tente4.jpg";
import "../styles/tente.css"
function TenteReservation() {
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

export default TenteReservation;