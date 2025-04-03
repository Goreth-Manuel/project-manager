import React from "react";


export type Project = {
    id: number;
    name: string;
    startDate: string;
    dueDate: string;
    status: string;
    assign: string;
  };
  

const ProjectTable: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Project Name</th>
          <th>Start Date</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Assign</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id}>
            <td>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.startDate}</td>
            <td>{project.dueDate}</td>
            <td>{project.status}</td>
            <td>{project.assign}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;
