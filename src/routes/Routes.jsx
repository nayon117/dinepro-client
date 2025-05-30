import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:'order/:category',
        element:<Order/>
      },{
        path:'/login',
        element:<Login/>
      }
    ],
  },
]);

export default router;
