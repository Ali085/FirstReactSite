import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import AboutPage from "../Page/AboutPage";
import Home from "../Page/Home";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/about",
        element: <AboutPage></AboutPage>,
    },
]);
export default router