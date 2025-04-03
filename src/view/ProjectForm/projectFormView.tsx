import ProjectForm from "../../components/ProjectForm/ProjectForm";
import { Container, Header } from "../../styles/global";
import { useProjectFormModel } from "../../model/useProjectFormModal";

const ProjectFormView = ({project, setProject, handleFormSubmit}: ReturnType<typeof useProjectFormModel>) => {

  return (
    <Container>
      <Header>
        <h1>Criar Novo Projeto</h1>
      </Header>
      <ProjectForm project={project} setProject={setProject} onSubmit={handleFormSubmit} />
    </Container>
  );
};

export default ProjectFormView;
