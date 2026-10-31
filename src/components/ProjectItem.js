function ProjectItem({ name, description, technologies }) {
  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>

      {technologies.map((technology) => (
        <span key={technology}> {technology} </span>
      ))}
    </li>
  );
}

export default ProjectItem;