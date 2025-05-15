import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
