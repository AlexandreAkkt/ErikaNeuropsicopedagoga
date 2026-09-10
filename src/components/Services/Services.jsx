import "./Services.css";
import Title from "../Text/Title";

import Card from "../Card/Card";

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
        <Card
          image={cerebroIcon}
          title="Avaliação Neuropsicopedagógica"
          description="Investigação das habilidades cognitivas e da aprendizagem para identificar dificuldades e potencialidades."
        />

        <Card
          image={coracaoIcon}
          title="Intervenção Neuropsicopedagógica"
          description="Atendimento individualizado com estratégias voltadas ao desenvolvimento da aprendizagem."
        />

        <Card
          image={homemIcon}
          title="Orientação Familiar"
          description="Apoio aos pais e responsáveis com orientações para estimular o desenvolvimento da criança."
        />

        <Card
          image={capeloIcon}
          title="Assessoria Escolar"
          description="Parceria com escolas para auxiliar no acompanhamento e na evolução do aluno."
        />

        <Card
          image={estrelaIcon}
          title="Atendimento para TDAH e TEA"
          description="Intervenção especializada para crianças e adolescentes com foco no desenvolvimento integral."
        />

        <Card
          image={livroIcon}
          title="Estimulação Cognitiva"
          description="Atividades para fortalecer memória, atenção, linguagem, raciocínio e funções executivas."
        />
      </div>
    </section>
  );
}

export default Services;
