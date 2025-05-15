import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex max-w-7xl h-screen mx-auto">
      
    <div className="w-64">
      <AdminSidebar />
    </div>
    <div className="flex-1 p-6 overflow-y-auto">
    <Outlet />
    </div>
  </div>
);
};


export default AdminDashboard;


