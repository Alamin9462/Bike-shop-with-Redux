import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="h-full w-full shadow-md p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Admin Panel</h2>
      <nav className="space-y-4">
        <NavLink
          to="/admin"
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-500 text-white : hover:bg-blue-100">
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/manage-user"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
            }`
          }
        >
          
          Manage Users
        </NavLink>

        <NavLink
          to="/admin/manage-product"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
            }`
          }
        >
          
          Manage Products
        </NavLink>

        <NavLink
          to="/admin/create-product"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-md ${
              isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"
            }`
          }
        >
          Create Product
        </NavLink>

        <button
          onClick={() => {
            // handle logout logic
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-red-100 text-red-600 w-full"
        >
        Logout
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
