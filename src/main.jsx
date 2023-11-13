// Import necessary modules from React and ReactDOM for rendering
import React from "react";
import ReactDOM from "react-dom/client";

// Import routing-related modules from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Bootstrap and custom styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

// Import React components for the pages
import App from "./App";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

// Define the accessible routes and components associated with each URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

// Render the RouterProvider component, wrapping the entire application in a router
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
