import "./Areas.css";
import Title from "../Text/Title";
import Card from "../Card/Card";

const areas = [
  {
    title: "Dislexia",
    description:
      "Avaliação e intervenção especializada nas dificuldades de leitura e escrita.",
  },
  {
    title: "Discalculia",
    description:
      "Estimulação de habilidades matemáticas e raciocínio lógico-matemático.",
  },
  {
    title: "Disgrafia",
    description:
      "Desenvolvimento da coordenação motora fina e aprimoramento da escrita.",
  },
  {
    title: "TEA (Autismo)",
    description: "Suporte focado em comunicação, interação social e autonomia.",
  },
  {
    title: "TDAH",
    description:
      "Estratégias para autorregulação, foco, atenção e organização.",
  },
  {
    title: "Transtornos de Linguagem",
    description: "Estímulo da comunicação verbal/não-verbal e compreensão.",
  },
  {
    title: "Dificuldade de Aprendizagem",
    description:
      "Identificação das causas e intervenção personalizada para o ambiente escolar.",
  },
  {
    title: "Deficiência Intelectual",
    description:
      "Apoio contínuo no desenvolvimento cognitivo e autonomia diária.",
  },
];

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
          {areas.map((area, index) => (
            <Card
              key={index}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;
