import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
]);

export default MainRoute;
