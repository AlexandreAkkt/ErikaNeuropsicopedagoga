import PropTypes from "prop-types";
import "./Card.css";

function Card({ title, description, image }) {
  return (
    <article className="card">
      <div className="card-icon">
        <img src={image} alt="" />
      </div>

      <div className="card-content">
        <h3>{title}</h3>

        {description && <p>{description}</p>}
      </div>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
};

export default Card;
