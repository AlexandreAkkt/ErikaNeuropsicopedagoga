import "./Areas.css";
import Title from "../Text/Title";
import Card from "../Card/Card";

let areas = [
  "Dislexia",
  "Discalculia",
  "Digrafia",
  "TEA (Autismo)",
  "TDAH",
  "Transtornos de Linguagem",
  "Dificuldade de Aprendizagem",
  "Deficiência intelectual"
];
function Areas() {
  return (
    <section id="areas">
      <div className="container">
        <div className="container-title">
          <Title
            title="Areas de Atuação"
            description="Atendimento neuropsicopedagógico personalizado para crianças, adolescentes e suas famílias."
          />
        </div>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <Card key={index} title={area} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;
