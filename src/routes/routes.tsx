// src/routes/routes.tsx
import {createBrowserRouter } from "react-router-dom";
import Login from "../viewModel/loginViewModel";
import Dashboard from "../view/Dashboard/dashboardView";
import Project from "../view/ProjectView/ProjectView";
import NewProject from "../view/newProject/newProject";

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
        path: "/project",
        element: <Project />
    },
    {
        path: "/newProject",
        element: <NewProject />
    },
  

]);



export default Routes;
