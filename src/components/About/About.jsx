import "./About.css";
import erikaAbout from "../../assets/erika.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-background"></div>

      <div className="container about">

        {/* IMAGEM */}
        <div className="about-image-area">
          <div className="about-image-decoration"></div>

          <div className="about-image-card">
            <img
              src={erikaAbout}
              alt="Erika Anjos - Neuropsicopedagoga"
            />

            <div className="about-image-badge">
              <span>♡</span>

              <div>
                <strong>Atendimento humanizado</strong>
                <small>Cuidado em cada etapa</small>
              </div>
            </div>
          </div>

          <div className="about-floating-card">
            <span>✦</span>
            <div>
              <strong>Cada história importa.</strong>
              <small>Respeito, acolhimento e desenvolvimento.</small>
            </div>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="about-content">

          <span className="about-tag">
            Erika Anjos
          </span>

          <h2>
            Cuidando do desenvolvimento
            <span> com acolhimento e dedicação.</span>
          </h2>

          <div className="about-line">
            <span></span>
            <strong>♥</strong>
          </div>

          <p className="about-description">
            Sou Neuropsicopedagoga e acredito que cada pessoa possui um jeito
            único de aprender. Meu trabalho é compreender suas necessidades e
            desenvolver estratégias que favoreçam seu desenvolvimento
            cognitivo, emocional e escolar.
          </p>

          {/* CARDS */}
          <div className="about-features">

            <div className="about-feature">
              <div className="feature-icon">
                🧠
              </div>

              <div>
                <h3>Formação especializada</h3>
                <p>
                  Pós-graduação em Neuropsicopedagogia e Neurociências.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                ♡
              </div>

              <div>
                <h3>Atendimento humanizado</h3>
                <p>
                  Abordagem acolhedora e individualizada para cada paciente.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                ✦
              </div>

              <div>
                <h3>Baseado em evidências</h3>
                <p>
                  Práticas fundamentadas em pesquisas científicas atuais.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                👥
              </div>

              <div>
                <h3>Orientação para famílias</h3>
                <p>
                  Suporte e orientação durante todo o processo.
                </p>
              </div>
            </div>

          </div>

          {/* FRASE FINAL */}
          <div className="about-quote">
            <span>“</span>

            <p>
              Acolher, compreender e potencializar cada pessoa em seu
              processo de desenvolvimento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;