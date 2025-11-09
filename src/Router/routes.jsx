import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home";
import AllModels from "../pages/AllModels";
import AddModel from "../pages/AddModel";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/Register/Register";
import DetailsPage from "../pages/DetailsPage";

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
        loader: () => fetch("https://ai-model-inventory.vercel.app/models"),
      },
      {
        path: "/add-model",
        element: <AddModel></AddModel>,
      },
      {
        path: "/model-details/:id",
        element: <DetailsPage></DetailsPage>,
      },
      {
        path: "/auth-register",
        Component: Register,
      },
      {
        path: "/auth-login",
        Component: Login,
      },
    ],
  },
]);

export default router;
