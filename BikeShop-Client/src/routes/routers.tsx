import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import AllProduct from "../page/AllProduct";
import ProductDetails from "../page/ProductDetails";
import About from "../page/About";
import MainLayout from "../layout/MainLayout";
import AdminLayout from "../layout/AdminLayout";
import ManageUsers from "../admin/ManageUsers";
import ManageProducts from "../admin/ManageProducts";
import ManageOrders from "../admin/ManageOrders";
import Register from "../page/Register";
import MyOrder from "../user/MyOrder";
import ProfileSettings from "../user/ProfileSettings";
import DashboardLayout from "../layout/DashboardLayout";
import Checkout from "../page/Checkout";
import Login from "../page/Login";

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'login', element: <Login/> },
        { path: 'register', element: <Register/> },
        { path: 'all-products', element: <AllProduct /> },
        { path: 'product/:id', element: <ProductDetails /> },
      ],
    },
    {
      path: '/checkout',
      element: (
        
          <Checkout/>
        
      ),
    },
    {
      path: '/dashboard',
      element: (
        
          <DashboardLayout/>
        
      ),
      children: [
        { path: 'my-orders', element: <MyOrder /> },
        { path: 'profile-settings', element: <ProfileSettings /> },
      ],
    },
    {
      path: '/admin',
      element: (
        
          <AdminLayout />
        
      ),
      children: [
        { path: 'users', element: <ManageUsers /> },
        { path: 'orders', element: <ManageOrders /> },
        { path: 'products', element: <ManageProducts /> },
      ],
    },
    // {
    //   path: '*',
    //   element: <NotFound />,
    // },
  ]);
  
  export default router;