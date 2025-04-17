import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { logout } from "../redux/features/auth/authSlice";

const ProfileDropdown = () => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
      dispatch(logout());
    };

    return (
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <UserCircleIcon className="h-6 w-6 text-gray-600" />
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link to="/orders">My Orders</Link>
          </li>
          <li>
            <button onClick={handleLogout} className=" hover:bg-red-100 text-red-600" >Logout</button>
          </li>
        </ul>
      </div>
    );
};

export default ProfileDropdown;