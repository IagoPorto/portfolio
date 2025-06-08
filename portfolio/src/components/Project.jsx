import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Project.css";

export function Project({ name, description, url, photos = [], tecnologies }) {
  const [current, setCurrent] = useState(0);
  const INTERVAL = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="project">
      <h3>{name}</h3>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Stack:</strong> {tecnologies.join(", ")}
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={photos[current]}
          alt={`${name} slide ${current + 1}`}
          className="project-photo"
        />
      </a>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.string),
  tecnologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Project.defaultProps = {
  photos: [],
};
