import "./Hero.css";
import erika from "../../assets/neuro.png";

function Hero() {
  return (
    <section className="hero">
      {/* Elementos decorativos */}
      <div className="hero-decoration hero-decoration-1"></div>
      <div className="hero-decoration hero-decoration-2"></div>

      <div className="hero-content">
        <span className="hero-tag">
           &nbsp; Cuidado especializado para o desenvolvimento
        </span>

        <h1>
          Neuropsicopedagogia
          <br />
          com <span>afeto</span> e ciência.
        </h1>

        <div className="hero-line">
          
          
        </div>

        <p>
          Apoio especializado para crianças, adolescentes e adultos que
          enfrentam dificuldades de aprendizagem, unindo neurociência e
          educação em uma abordagem humanizada.
        </p>

        <div className="hero-buttons">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeA_hCbNqUEDBlzGLm6nJKtwJd2hFrnIHcSnt5It0THd21iYg/viewform"
            className="button-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span></span>
            Enviar Anamnese
          </a>
        </div>

        {/* Benefícios */}
        <div className="hero-benefits">
          <div className="benefit-card">
            <div className="benefit-icon cognitive"></div>
            <h3>Avaliação Cognitiva</h3>
            <p>Entendimento profundo e único.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon care"></div>
            <h3>Acolher, entender e potencializar.</h3>
            <p>Cada história importa.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon progress"></div>
            <h3>Cada conquista importa.</h3>
            <p>Valorizar cada passo alcançado.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon together"></div>
            <h3>Juntos, transformamos desafios.</h3>
            <p>Desenvolvimento com propósito.</p>
          </div>
        </div>

        <div className="hero-security">
          <span></span>
          Seus dados são protegidos com total confidencialidade.
        </div>
      </div>

      {/* Imagem */}
      <div className="hero-image-wrapper">
        <div className="hero-image">
          <img src={erika} alt="Atendimento em neuropsicopedagogia" />
        </div>

        <div className="image-message">
          <span>*</span>
          <p>
            Aqui, cada passo é acompanhado com cuidado, ciência e muita
            empatia.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;