import "./Services.css";
import Title from "../Text/Title"; // ajuste o caminho conforme onde está seu componente Title

import capeloIcon from "../../assets/capelo.png";
import cerebroIcon from "../../assets/cerebro.png";
import coracaoIcon from "../../assets/Coracao.png";
import estrelaIcon from "../../assets/estrela.png";
import homemIcon from "../../assets/homem.png";
import livroIcon from "../../assets/livro.png";

function Services() {
  return (
    <section id="services">
      <Title
        title="Serviços"
        description="Atendimento neuropsicopedagógico personalizado para crianças, adolescentes e suas famílias."
      />

      <div className="services-container">
        {/* Avaliação Neuropsicopedagógica */}
        <div className="service">
          <div className="service-icon">
            <img
              src={cerebroIcon}
              alt="Ícone de avaliação neuropsicopedagógica"
            />
          </div>

          <h3>
            Avaliação
            <br />
            Neuropsicopedagógica
          </h3>

          <p>
            Investigação das habilidades cognitivas e da aprendizagem para
            identificar dificuldades e potencialidades.
          </p>
        </div>

        {/* Intervenção Neuropsicopedagógica */}
        <div className="service">
          <div className="service-icon">
            <img
              src={coracaoIcon}
              alt="Ícone de intervenção neuropsicopedagógica"
            />
          </div>

          <h3>
            Intervenção
            <br />
            Neuropsicopedagógica
          </h3>

          <p>
            Atendimento individualizado com estratégias voltadas ao
            desenvolvimento da aprendizagem.
          </p>
        </div>

        {/* Orientação Familiar */}
        <div className="service">
          <div className="service-icon">
            <img src={homemIcon} alt="Ícone de orientação familiar" />
          </div>

          <h3>Orientação Familiar</h3>

          <p>
            Apoio aos pais e responsáveis com orientações para estimular o
            desenvolvimento da criança.
          </p>
        </div>

        {/* Assessoria Escolar */}
        <div className="service">
          <div className="service-icon">
            <img src={capeloIcon} alt="Ícone de assessoria escolar" />
          </div>

          <h3>Assessoria Escolar</h3>

          <p>
            Parceria com escolas para auxiliar no acompanhamento e na evolução
            do aluno.
          </p>
        </div>

        {/* Atendimento para TDAH e TEA */}
        <div className="service">
          <div className="service-icon">
            <img src={estrelaIcon} alt="Ícone de atendimento para TDAH e TEA" />
          </div>

          <h3>Atendimento para TDAH e TEA</h3>

          <p>
            Intervenção especializada para crianças e adolescentes com foco no
            desenvolvimento integral.
          </p>
        </div>

        {/* Estimulação Cognitiva */}
        <div className="service">
          <div className="service-icon">
            <img src={livroIcon} alt="Ícone de estimulação cognitiva" />
          </div>

          <h3>Estimulação Cognitiva</h3>

          <p>
            Atividades para fortalecer memória, atenção, linguagem, raciocínio e
            funções executivas.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
