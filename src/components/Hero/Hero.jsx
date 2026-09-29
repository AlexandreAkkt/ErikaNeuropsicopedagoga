import "./Hero.css";
import erika from "../../assets/quadro.png";

function Hero() {
  return (
    <section className="hero">
      {/* Fundo com a imagem e degradê sobreposto */}
      <div className="hero-bg">
        <img src={erika} alt="Erika, neuropsicopedagoga" />
        <div className="hero-overlay"></div>
      </div>

      {/* Conteúdo principal de texto e botões */}
      <div className="hero-content">
        <span className="hero-tag">
          Atendimento Especializado — São Paulo
        </span>

        <h1>
          Neuropsicopedagogia.<br />
          <span className="hero-lede">com afeto e ciência.</span>
        </h1>

        <p>
          Apoio especializado para crianças, adolescentes e adultos que
          enfrentam dificuldades de aprendizagem, unindo neurociência e educação
          em uma abordagem humanizada.
        </p>

        <div className="hero-buttons">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeA_hCbNqUEDBlzGLm6nJKtwJd2hFrnIHcSnt5It0THd21iYg/viewform"
            className="button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar Anamnese
          </a>
          <a href="#contato" className="button-secondary">
            Pedir Informações
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;