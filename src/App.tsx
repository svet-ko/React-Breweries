import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./Home";
import SingleBrewery from "./Brewery";
import Root from "./Root";
import About from "./About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      /*errorElement: <ErrorPage />,*/
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