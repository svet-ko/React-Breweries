import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./pages/Home";
import SingleBrewery from "./pages/Brewery";
import Root from "./pages/Root";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage message="Page not found" />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: ":breweryID",
          element: <SingleBrewery />
        },
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App