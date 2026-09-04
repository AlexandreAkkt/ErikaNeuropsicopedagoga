import "./Hero.css";
import erika from "../../assets/neuro.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          Cuidado especializado para o desenvolvimento
        </span>

        <h1>Neuropsicopedagogia com afeto e ciência.</h1>

        <p>
          Apoio especializado para crianças, adolescentes e adultos que
          enfrentam dificuldades de aprendizagem, unindo neurociência e educação
          em uma abordagem humanizada.
        </p>

        <div className="hero-buttons">
          <a
            href="#" // Substitua pelo link do seu formulário quando criar
            className="button-primary"
          >
            Agende sua Avaliação
          </a>
        </div>
      </div>

      {/* Área da imagem com elementos flutuantes de neuropsicopedagogia */}
      <div className="hero-image-wrapper">
        <div className="badge-float badge-1"> Avaliação Cognitiva</div>
        <div className="badge-float badge-2"> Apoio Escolar</div>

        <div className="hero-image">
          <img src={erika} alt="Erika - Neuropsicopedagoga" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
