import "./About.css";
import erikaAbout from "../../assets/erika.png";
import estudoImg from "../../assets/estudo.png";
import coracaoImg from "../../assets/coracaoo.png";
import lupaImg from "../../assets/lupa.png";
import familiaImg from "../../assets/familia.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about">

        {/* IMAGEM COM ESTILO ELEGANTE */}
        <div className="about-image">
          <div className="about-image-card">
            <img
              src={erikaAbout}
              alt="Erika Anjos - Neuropsicopedagoga"
            />
            <div className="about-image-badge">
              <div>
                <strong>Atendimento humanizado</strong>
                <small>Cuidado em cada etapa</small>
              </div>
            </div>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="about-content">
          <span className="about-tag">Erika Anjos</span>

          <h2>
            Cuidando do desenvolvimento
            <span> com acolhimento e dedicação.</span>
          </h2>

          <p>
            Sou Neuropsicopedagoga e acredito que cada pessoa possui um jeito
            único de aprender. Meu trabalho é compreender suas necessidades e
            desenvolver estratégias que favoreçam seu desenvolvimento
            cognitivo, emocional e escolar.
          </p>

          {/* CARDS DE DIFERENCIAIS */}
          <div className="about-features">
            
            <div className="about-feature">
              <div className="feature-icon">
                <img src={estudoImg} alt="Ícone de Formação especializada" />
              </div>
              <div>
                <h3>Formação especializada</h3>
                <p>Pós-graduação em Neuropsicopedagogia e Neurociências.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <img src={coracaoImg} alt="Ícone de Atendimento humanizado" />
              </div>
              <div>
                <h3>Atendimento humanizado</h3>
                <p>Abordagem acolhedora e individualizada para cada paciente.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <img src={lupaImg} alt="Ícone Baseado em evidências" />
              </div>
              <div>
                <h3>Baseado em evidências</h3>
                <p>Práticas fundamentadas em pesquisas científicas atuais.</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <img src={familiaImg} alt="Ícone de Família" />
              </div>
              <div>
                <h3>Orientação para famílias</h3>
                <p>Suporte e orientação durante todo o processo.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;