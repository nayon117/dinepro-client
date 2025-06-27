import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import PR from "./PR";
import DashboardLayout from "../layout/DashboardLayout";
import Cart from "../pages/dashboard/Cart";

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
        element:<PR><Menu/></PR> 
      },
      {
        path:'order/:category',
        element:<Order/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      }
    ],
  },
  {
    path:'dashboard',
    element:<PR><DashboardLayout /></PR>,
    children:[
      {
        path:'cart',
        element:<Cart />
      }
    ]
  }
]);

export default router;
