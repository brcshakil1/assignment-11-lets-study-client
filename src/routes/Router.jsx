import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../layout/MainLayout";
import Login from "./../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import PrivetRoute from "./PrivetRoute";
import Assignments from "../pages/Assignments/Assignments";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/update-assignment/:id",
        element: <UpdateAssignment />,
      },
      {
        path: "/create-assignment",
        element: (
          <PrivetRoute>
            <CreateAssignment />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Router;
