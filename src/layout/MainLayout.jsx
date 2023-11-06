import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="relative overflow-hidden ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
