import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home";
import AllModels from "../pages/AllModels";
import AddModel from "../pages/AddModel";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/Register/Register";
import DetailsPage from "../pages/DetailsPage";
import PrivateRouter from "./PrivateRouter";
import UpdateModelPage from "../pages/UpdateModelPage";
import MyModels from "../pages/MyModels";
import MyPurchasedModel from "../pages/MyPurchasedModel";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/About/AboutPage";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-models",
        element: <AllModels></AllModels>,

        // loader: () => fetch("https://ai-model-inventory.vercel.app/models"),
      },
      {
        path: "/about-page",
        Component: AboutPage,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/add-model",
        element: (
          <PrivateRouter>
            <AddModel></AddModel>
          </PrivateRouter>
        ),
      },
      {
        path: "/model-details/:id",
        element: (
          <PrivateRouter>
            <DetailsPage></DetailsPage>
          </PrivateRouter>
        ),
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivateRouter>
            <UpdateModelPage></UpdateModelPage>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-models",
        element: (
          <PrivateRouter>
            <MyModels></MyModels>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-purchased-model",
        element: (
          <PrivateRouter>
            <MyPurchasedModel></MyPurchasedModel>
          </PrivateRouter>
        ),
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
