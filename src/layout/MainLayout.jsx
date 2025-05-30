import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";

const MainLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes('login');
  return (
    <>
      {isLogin || <Navbar/>}
      <Outlet />
      {isLogin || <Footer />}
    </>
  );
};
export default MainLayout;
