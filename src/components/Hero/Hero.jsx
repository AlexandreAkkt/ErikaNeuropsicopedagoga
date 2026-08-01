import "./Hero.css";
import erika from "../../assets/logo.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
           Cuidado especializado para seu desenvolvimento
        </span>

        <h1>
          Neuropsicopedagogia com  afeto e ciência. <br />
          
        </h1>

        <p>
          Apoio especializado para crianças, adolescentes e adultos que
          enfrentam dificuldades de aprendizagem, com uma abordagem
          integrativa e humanizada.
        </p>

        <div className="hero-buttons">
          <button className="button-primary">
            Agendar Avaliação
          </button>

          <button className="button-secondary">
            Saiba Mais
          </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={erika} alt="Erika - Neuropsicopedagoga" />
      </div>
    </section>
  );
}

export default Hero;