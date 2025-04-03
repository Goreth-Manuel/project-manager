import React from "react";

interface Task {
  title: string;
  description: string;
  assignedTo: string;
}

interface TaskFormProps {
  task: Task;
  setTask: (task: Task) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, setTask, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>Título da Tarefa:</label>
      <input
        type="text"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />

      <label>Descrição:</label>
      <textarea
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />

      <label>Responsável:</label>
      <input
        type="text"
        value={task.assignedTo}
        onChange={(e) => setTask({ ...task, assignedTo: e.target.value })}
        required
      />

      <button type="submit">Salvar Tarefa</button>
    </form>
  );
};

export default TaskForm;
