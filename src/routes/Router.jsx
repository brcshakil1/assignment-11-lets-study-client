import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./../layout/MainLayout";
import Login from "./../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import PrivetRoute from "./PrivetRoute";
import Assignments from "../pages/Assignments/Assignments";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import ViewAssignment from "../pages/ViewAssignment/ViewAssignment";
import AllSubmittedAssignment from "../pages/AllSubmittedAssignment/AllSubmittedAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import Error from "../components/Error/Error";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/all-submitted-assignments",
        element: (
          <PrivetRoute>
            <AllSubmittedAssignment />
          </PrivetRoute>
        ),
      },
      {
        path: "/view-assignment/:id",
        element: (
          <PrivetRoute>
            <ViewAssignment />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/all-assignments/${params.id}`),
      },
      {
        path: "/update-assignment/:id",
        element: (
          <PrivetRoute>
            <UpdateAssignment />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/all-assignments/${params.id}`),
      },
      {
        path: "/create-assignment",
        element: (
          <PrivetRoute>
            <CreateAssignment />
          </PrivetRoute>
        ),
      },
      {
        path: "/my-assignment",
        element: (
          <PrivetRoute>
            <MyAssignment />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default Router;
