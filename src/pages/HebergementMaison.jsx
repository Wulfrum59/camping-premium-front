import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import maison1 from "../assets/hebergement/maison1.jpg";
import maison2 from "../assets/hebergement/maison2.jpg";
import maison3 from "../assets/hebergement/maison3.jpg";
import maison4 from "../assets/hebergement/maison4.jpg";
import "../styles/tente.css"
function MaisonReservation() {
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
                        Plongez dans le confort et l’espace généreux de nos maisons, conçues pour offrir un séjour agréable et relaxant pour toute la famille ou un groupe d’amis. Chaque maison est soigneusement aménagée pour répondre à tous vos besoins : chambres spacieuses avec des lits confortables pour des nuits reposantes, salon convivial et lumineux, cuisine entièrement équipée pour préparer vos repas, et espace repas chaleureux où partager des moments agréables. Certaines maisons disposent également d’une terrasse ou d’un jardin privatif, idéal pour profiter pleinement du plein air et de la beauté naturelle qui entoure le camping.
                        Idéal pour ceux qui recherchent intimité, confort et liberté, nos maisons vous permettent de profiter de la nature tout en ayant tout le nécessaire à portée de main. Que vous souhaitiez vous détendre, cuisiner un repas en famille, ou simplement profiter des espaces extérieurs pour jouer, lire ou vous relaxer, chaque instant dans nos maisons est pensé pour vous offrir un maximum de confort et de sérénité.
                        Nos maisons combinent praticité moderne et charme authentique, créant un cadre idéal pour des vacances inoubliables. Que vous passiez quelques jours ou une semaine entière, elles sont parfaites pour vivre des moments privilégiés avec vos proches, tout en restant proches des activités et services du camping. Installez-vous, respirez profondément et laissez-vous porter par l’atmosphère paisible et accueillante de votre hébergement. Chaque séjour dans nos maisons devient une expérience unique, où confort, détente et convivialité se rencontrent pour créer des souvenirs mémorables.
                    </p>

                    <button className="btn-reserver">Réserver</button>
                </article>

            </section>
            <Footer />
        </>
    )
}

export default MaisonReservation;