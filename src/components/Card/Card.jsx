/* eslint-disable react/prop-types */
import "./Card.css";
function Card({ title }) {
  return (
    <div className="area-card">
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
