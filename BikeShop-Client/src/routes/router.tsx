import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import AllProduct from "../page/AllProduct";
import About from "../page/About";
import AdminDashboard from "../admin/AdminDashboard";
import CreateProduct from "../admin/CreateProduct";
import Login from "../page/Login";
import Register from "../page/Register";
import ManageUsers from "../admin/ManageUsers";
import ManageProducts from "../admin/ManageProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "all-product",
        element: <AllProduct></AllProduct>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <AdminDashboard />,
        children: [
          {
            path: "create-product",
            element: <CreateProduct></CreateProduct>,
          },
          {
            path: "manage-user",
            element: <ManageUsers />,
          },
          {
            path: "manage-product",
            element: <ManageProducts />,
          },
        ],
      },
    ],
  },
]);

export default router;
