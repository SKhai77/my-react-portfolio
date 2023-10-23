// Import necessary modules from React and ReactDOM for rendering
import React from "react";
import ReactDOM from "react-dom/client";

// Import routing-related modules from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Bootstrap and custom styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import React components for the pages
import App from "./App.jsx";
import Home from "./pages/Home";
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
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio/:id", // Dynamic route for portfolio with an ID parameter
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
  <RouterProvider router={router}>
    {/* Wrap the entire application in React StrictMode for additional development checks */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
);
