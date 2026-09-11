import PropTypes from "prop-types";
import "./Card.css";

function Card({ image, title, description, variant = "default" }) {
  return (
    <div className={`card ${variant === "large" ? "card-large" : ""}`}>
      {image && (
        <div className="card-icon">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  variant: PropTypes.string,
};

export default Card;