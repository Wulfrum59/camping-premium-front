import Reservation from "../components/Reservation";

function Hebergement() {
  const hebergementId = 1; // dynamique plus tard

  return (
    <section>
      <article>
        <h1>Mobil-home Premium</h1>
        <Reservation hebergementId={hebergementId} />
      </article>
    </section>
  );
}

export default Hebergement;