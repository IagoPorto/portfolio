import { useEffect, useState } from "react";
import "./Project.css";

export function Project({ name, description, url, photos = [], tecnologies }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3000);
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
