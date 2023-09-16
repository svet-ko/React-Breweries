import React from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Home";
import SingleBrewery from "./Brewery";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: ":breweryID",
      element: <SingleBrewery />
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App