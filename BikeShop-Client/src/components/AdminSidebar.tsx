import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/auth/authSlice";
import { useAppDispatch } from "../redux/hook";
import { toast } from "sonner";

const AdminSidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successfully!");
    navigate("/login");
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-md ${
      isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
    }`;

  return (
    <div className="h-full w-full shadow-md p-2 bg-base-200">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>

      <nav className="space-y-3 font-medium">
        {/* Dashboard */}
        <NavLink to="/admin" className={linkClass}>
          Dashboard
        </NavLink>

        {/* Product List */}
        <NavLink to="/admin/manage-product" className={linkClass}>
          Products
        </NavLink>
        {/* Order Management */}
        <NavLink to="/admin/manage-order" className={linkClass}>
          Orders
        </NavLink>

        {/* User Management */}
        <NavLink to="/admin/manage-user" className={linkClass}>
          Users
        </NavLink>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full text-left text-red-600 px-4 rounded-md hover:bg-red-100 "
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
