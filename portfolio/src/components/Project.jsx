export function Project({ name, description, url, photo, tecnologies }) {
  return (
    <div className="project">
      <h3>{name}</h3>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Stack:</strong> {tecnologies.join(', ')}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={photo}
          alt={`${name} logo`}
          className="project-photo"
        />
      </a>
    </div>
  )
}
