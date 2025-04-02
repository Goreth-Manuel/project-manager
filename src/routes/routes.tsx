// src/routes/routes.tsx
import {createBrowserRouter } from "react-router-dom";
import Login from "../view/Login/login";
import Register from "../view/Register/register";
import Dashboard from "../view/Dashboard/dashboard";
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
]);



export default Routes;
