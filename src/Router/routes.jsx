import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home";
import AllModels from "../pages/AllModels";
import AddModel from "../pages/AddModel";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-models",
        element: <AllModels></AllModels>,
      },
      {
        path: "/add-model",
        element: <AddModel></AddModel>,
      },
    ],
  },
]);

export default router;
