import React from "react";
import { Link } from "react-router-dom";

// Definição do tipo para o objeto do projeto
interface Project {
    id: string;
    title: string;
    description: string;
  }
  
  // Definição das props do componente
  interface ProjectCardProps {
    project: Project;
  }

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <Link to={`/project/${project.id}`}>Ver Detalhes</Link>
    </div>
  );
};

export default ProjectCard;
