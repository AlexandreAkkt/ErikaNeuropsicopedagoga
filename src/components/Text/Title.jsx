import "./Title.css";

// eslint-disable-next-line react/prop-types
function Title({ tag, title, description }) {
  return (
    <div className="title-card">
      {/* Renderiza a tag apenas se ela for passada como prop */}
      {tag && <span className="title-tag">{tag}</span>}
      
      <h2>{title}</h2>
      
      {/* Renderiza a descrição apenas se existir */}
      {description && <p>{description}</p>}
    </div>
  );
}

export default Title;