// Import necessary modules from React and ReactDOM for rendering
import React from "react";
import ReactDOM from "react-dom/client";

// Import routing-related modules from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Bootstrap and custom styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

// Import the main App component
import App from "./App";

// Import individual page components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

// Define the accessible routes and components associated with each URL
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />,
    children: [
      {
        path: "about", // URL path for About section
        element: <About />,
      },
      {
        path: "portfolio", // URL path for Portfolio section
        element: <Portfolio />,
      },
      {
        path: "resume", // URL path for Resume section
        element: <Resume />,
      },
      {
        path: "contact", // URL path for Contact section
        element: <Contact />,
      },
    ],
  },
]);

// Render the RouterProvider component, wrapping the entire application in a router
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* RouterProvider wraps the app to enable routing */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
