import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
    errorElement: <PageNotFound />,
  },
]);
