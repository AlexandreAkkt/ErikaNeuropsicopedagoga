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

          <span className="about-tag">
            Sobre
          </span>

          <h2>
            Cuidando do desenvolvimento infantil com acolhimento e dedicação.</h2>

          <p>
            Sou Neuropsicopedagoga e acredito que cada criança possui um jeito
            único de aprender. Meu trabalho é compreender suas necessidades e
            desenvolver estratégias que favoreçam seu desenvolvimento cognitivo,
            emocional e escolar.
          </p>

          <ul>
            <li>✔ Atendimento individualizado</li>
            <li>✔ Avaliação Neuropsicopedagógica</li>
            <li>✔ Intervenção nas dificuldades de aprendizagem</li>
            <li>✔ Orientação para famílias</li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default About;
