import "./About.css";
import erikaAbout from "../../assets/erika.png";

function About() {
  return (
    <section id="about">
      <div className="container about">
        <div className="about-image">
          <img src={erikaAbout} alt="Neuropsicopedagoga Erika" />
        </div>

        <div className="about-content">
          <span className="about-tag">Erika S. de Oliveira dos Anjos</span>

          <h2>
            Cuidando do desenvolvimento infantil com acolhimento e dedicação.
          </h2>

          <p>
            Sou Neuropsicopedagoga e acredito que cada criança possui um jeito
            único de aprender. Meu trabalho é compreender suas necessidades e
            desenvolver estratégias que favoreçam seu desenvolvimento cognitivo,
            emocional e escolar.
          </p>

          <ul className="about-list">
            <li>
              <strong>Formação Especializada</strong>
              <p>Pós-graduação em Neuropsicopedagogia e Neurociências</p>
            </li>

            <li>
              <strong>Atendimento Humanizado</strong>
              <p>Abordagem acolhedora e individualizada para cada paciente</p>
            </li>

            <li>
              <strong>Metodologia Baseada em Evidências</strong>
              <p>Práticas fundamentadas em pesquisas científicas atuais</p>
            </li>

            <li>
              <strong>Orientação para Famílias</strong>
              <p>Orientação e suporte para as famílias durante o processo.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
