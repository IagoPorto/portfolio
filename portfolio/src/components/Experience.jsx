import PropTypes from "prop-types";
import "./Experience.css";

export function Experience({
  companyName,
  companyUrl,
  position,
  initDate,
  finalDate,
  details,
}) {
  return (
    <div className="job">
      <h3>
        {position} at{" "}
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          {companyName}
        </a>
      </h3>
      <p>
        {initDate} - {finalDate}
      </p>
      <ul>
        {details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

Experience.propTypes = {
  companyName: PropTypes.string.isRequired,
  companyUrl: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  initDate: PropTypes.string.isRequired,
  finalDate: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};
