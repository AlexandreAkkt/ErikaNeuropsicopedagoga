import "./Areas.css";
import Title from "../Text/Title";
import Card from "../Card/Card";

import dislexiaIcon from "../../assets/dislexia.png";
import discalculiaIcon from "../../assets/discalculia.png";
import disgrafiaIcon from "../../assets/disgrafia.png";
import teaAutismoIcon from "../../assets/teaAutismo.png";
import tdahIcon from "../../assets/tdah.png";
import linguagemIcon from "../../assets/linguagem.png";
import aprendizagemIcon from "../../assets/aprendizagem.png";
import intelectualIcon from "../../assets/intelectual.png";

function Areas() {
  return (
    <section id="areas" className="areas-section">
      <div className="container">
        <div className="container-title">
          <Title
            title="Áreas de Atuação"
            description="Atendimento neuropsicopedagógico personalizado para crianças, adolescentes e orientação familiar."
          />
        </div>

        <div className="areas-grid">
          <Card
            variant="large"
            image={dislexiaIcon}
            title="Dislexia"
            description="Avaliação e intervenção especializada nas dificuldades de leitura e escrita."
          />

          <Card
            variant="large"
            image={discalculiaIcon}
            title="Discalculia"
            description="Estimulação de habilidades matemáticas e raciocínio lógico-matemático."
          />

          <Card
            variant="large"
            image={disgrafiaIcon}
            title="Disgrafia"
            description="Desenvolvimento da coordenação motora fina e aprimoramento da escrita."
          />

          <Card
            variant="large"
            image={teaAutismoIcon}
            title="TEA (Autismo)"
            description="Suporte focado em comunicação, interação social e autonomia."
          />

          <Card
            variant="large"
            image={tdahIcon}
            title="TDAH"
            description="Estratégias para autorregulação, foco, atenção e organização."
          />

          <Card
            variant="large"
            image={linguagemIcon}
            title="Transtornos de Linguagem"
            description="Estímulo da comunicação verbal/não-verbal e compreensão."
          />

          <Card
            variant="large"
            image={aprendizagemIcon}
            title="Dificuldade de Aprendizagem"
            description="Identificação das causas e intervenção personalizada para o ambiente escolar."
          />

          <Card
            variant="large"
            image={intelectualIcon}
            title="Deficiência Intelectual"
            description="Apoio contínuo no desenvolvimento cognitivo e autonomia diária."
          />
        </div>
      </div>
    </section>
  );
}

export default Areas;