import { useState } from "react";

interface Task {
    title: string;
    description: string;
    assignedTo: string;
  };

export const useTaskFormModel = () => {
  const [task, setTask] = useState<Task>({ title: "", description: "", assignedTo: "" });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tarefa criada:", task);
  };

  return { task, setTask, handleFormSubmit };
};
