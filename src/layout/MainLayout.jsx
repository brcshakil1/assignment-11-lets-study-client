import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="relative overflow-hidden border border-red-300">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
