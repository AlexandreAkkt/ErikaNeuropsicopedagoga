import "./Title.css";

// props = são os parâmetros que passo na função
// new Pessoa("Erika", 30) => props = {nome: "Erika", idade: 30}

// eslint-disable-next-line react/prop-types
function Title({ title, description }) {
  return (
    <div className="title-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Title;