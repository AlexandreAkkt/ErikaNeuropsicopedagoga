import "./Title.css";

// eslint-disable-next-line react/prop-types
//props = sao os paramametros que passo na funcao
//new Pessoa("Erika", 30) => props = {nome: "Erika", idade: 30}
function Title({ title, description }) {
  return (
    <div className="title-card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Title;
