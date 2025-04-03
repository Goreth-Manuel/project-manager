import { useState } from "react";
// import { Project } from "../models/Project";

interface Project {
    title: string;
    description: string;
  };

export const useProjectFormModel = () => {
  const [project, setProject] = useState<Project>({ title: "", description: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Projeto criado:", project);
  };

  return { project, setProject, handleFormSubmit };
};
