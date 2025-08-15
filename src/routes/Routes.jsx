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
import AllUsers from "../pages/dashboard/admin/AllUsers";
import AddItems from "../pages/dashboard/admin/AddItems";
import AR from "./AR";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateItem from "../pages/dashboard/admin/UpdateItem";

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
      },

      // admin routes
      {
        path: 'allUsers',
        element:<AR> <AllUsers/></AR>
      },
      {
        path: 'addItems',
        element: <AR> <AddItems /></AR>
      },
      {
        path: 'manageItems',
        element: <AR><ManageItems/></AR>
      },
      {
        path: 'updateItem/:id',
        element: <AR><UpdateItem /></AR>,
        loader:({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      },

    ]
  }
]);

export default router;
