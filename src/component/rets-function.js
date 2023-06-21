import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// the Overall Rating
function rate(rates) {
  if (rates === 5) {
    return (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
      </span>
    );
  }
  if (rates >= 4.5) {
    return (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#ffc107" }} />
      </span>
    );
  } else if (rates === 4) {
    return (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
      </span>
    );
  }
  if (rates === 3) {
    return (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
      </span>
    );
  } else if (rates >= 3.5) {
    return (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#ffc107" }} />
      </span>
    );
  }
  if (rates === 2) {
    return (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
      </span>
    );
  } else if (rates >= 2.5) {
    return (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#ffc107" }} />
      </span>
    );
  }
  if (rates === 1) {
    return (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
      </span>
    );
  } else if (rates >= 1.5) {
    return (
      <span>
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffc107" }} />
        <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: "#ffc107" }} />
      </span>
    );
  }
}

export function progress(rate) {
  return rate * 20;
}

export default rate;
