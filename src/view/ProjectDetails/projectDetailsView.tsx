import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import { Container, Header } from "../../styles/global";

const ProjectDetailsView = () => {
  return (
    <Container>
      <Header>
        <h1>Detalhes do Projeto</h1>
      </Header>
      <ProjectDetails />
    </Container>
  );
};

export default ProjectDetailsView;
