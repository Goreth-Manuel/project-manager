import React, { FormEvent } from "react";

interface Project {
    title: string;
    description: string;
  }
  
interface ProjectFormProps {
    project: Project;
    setProject: (project: Project) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
  

const ProjectForm: React.FC<ProjectFormProps> = ({ project, setProject, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Título:</label>
      <input
        type="text"
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
      />
      <label>Descrição:</label>
      <textarea
        value={project.description}
        onChange={(e) => setProject({ ...project, description: e.target.value })}
      />
      <button type="submit">Salvar Projeto</button>
    </form>
  );
};

export default ProjectForm;
