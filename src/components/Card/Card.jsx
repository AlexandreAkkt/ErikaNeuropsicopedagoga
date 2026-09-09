import PropTypes from "prop-types";
import "./Card.css";

function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      {description && <p>{description}</p>}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Card;