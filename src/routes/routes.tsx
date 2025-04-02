// src/routes/routes.tsx
import {createBrowserRouter } from "react-router-dom";
import Login from "../viewModel/loginViewModel";
import Register from "../view/Register/register";
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

]);



export default Routes;
