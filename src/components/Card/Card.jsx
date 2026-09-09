// src/components/Card/Card.jsx
import "./Card.css";

function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  );
}

export default Card;
