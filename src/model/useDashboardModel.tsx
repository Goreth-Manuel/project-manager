// import { useState } from "react";

//     interface Project {
//     id: number;
//     title: string;
//     description: string;
//   };

// export const useDashboardModel = () => {
//   const [projects, setProjects] = useState<Project[]>([
//     { id: 1, title: "Projeto 1", description: "Descrição do projeto 1" },
//     { id: 2, title: "Projeto 2", description: "Descrição do projeto 2" },
//   ]);

//   const addProject = (title: string, description: string) => {
//     const newProject: Project = {
//       id: projects.length + 1,
//       title,
//       description,
//     };
//     setProjects([...projects, newProject]);
//   };

//   return { projects, addProject };
// };

import { useState } from "react";

export type ChatMessage = {
  id: number;
  user: string;
  message: string;
  time: string;
};

export type Stats = {
  title: string;
  value: string;
  percentage: string;
  color: string;
};

export type Project = {
  id: number;
  name: string;
  startDate: string;
  dueDate: string;
  status: string;
  assign: string;
};

export type ChartData = {
  labels: string[];
  dataSets: { label: string; data: number[]; color: string }[];
};

export const useDashboardModel = () => {
  const [stats] = useState<Stats[]>([
    { title: "Daily Visits", value: "8,652", percentage: "2.97%", color: "#e74c3c" },
    { title: "Revenue", value: "$9,254.62", percentage: "18.32%", color: "#8e44ad" },
    { title: "Orders", value: "753", percentage: "5.72%", color: "#2980b9" },
    { title: "Users", value: "63,154", percentage: "8.23%", color: "#16a085" },
  ]);

  const [chartData] = useState<ChartData>({
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dataSets: [
      { label: "Revenue", data: [400, 500, 600, 700, 800, 900, 1000], color: "#3498db" },
      { label: "Sales", data: [300, 400, 500, 600, 700, 800, 900], color: "#2ecc71" },
    ],
  });

  const [projects] = useState<Project[]>([
    { id: 1, name: "Velonic Admin v1", startDate: "01/01/2015", dueDate: "26/04/2015", status: "Released", assign: "Techzaa Studio" },
    { id: 2, name: "Velonic Frontend v1", startDate: "01/01/2015", dueDate: "26/04/2015", status: "Released", assign: "Techzaa Studio" },
  ]);

  const [chat] = useState<ChatMessage[]>([
    { id: 1, user: "Cecilia", message: "Hello!", time: "10:00" },
    { id: 2, user: "Thomson", message: "Hi, how are you?", time: "10:01" },
  ]);

  return { stats, chartData, projects, chat };
};
