import styled from "styled-components";

const ProjectsWrapper = styled.div`
  padding: 20px;
  background: #f5efe7;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  border: 1px solid #6c8e71;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectCard>
        <h3>AutoGuard</h3>
        <p>Android app for driver safety using MediaPipe and MPAndroidChart.</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Distributed Event Ticketing System</h3>
        <p>A distributed system for managing ticket sales using Ricart-Agrawala.</p>
      </ProjectCard>
      {/* Add more projects here */}
    </ProjectsWrapper>
  );
};

export default Projects;
