import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </ul>
  );
}

export default ProjectList;