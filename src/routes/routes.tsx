// src/routes/routes.tsx
import { Route, Routes } from "react-router-dom";
import Login from "../viewModel/loginViewModel";
import Dashboard from "../view/Dashboard/dashboardView";
import Project from "../view/ProjectView/ProjectView";
import NewProject from "../view/newProject/newProject";

import Register from "../viewModel/registerViewModel";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/newProject" element={<NewProject />} />
      </Routes>
    );
  }
