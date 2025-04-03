// src/routes/routes.tsx
import {createBrowserRouter } from "react-router-dom";
import Login from "../viewModel/loginViewModel";
import Dashboard from "../viewModel/dashboardViewModel"
import ProjectDetailsView from "../view/ProjectDetails/projectDetailsView";
import ProjectForm from "../viewModel/projectFormViewModel";
import TaskForm from "../viewModel/taskFormViewModel";
import Register from "../viewModel/registerViewModel";
// import NotFound from "../pages/NotFound";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/project/:id",
        element: <ProjectDetailsView />
    },
    {
        path: "/project/create",
        element: <ProjectForm />
    },
    {
        path: "/task/create",
        element: <TaskForm />
    },

]);



export default Routes;
