import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link,} from "react-router-dom";
import { useAppDispatch } from "../redux/hook";
import { logout } from "../redux/features/auth/authSlice";
import MyOrder from "../page/MyOrder";
import { toast } from "sonner";


const ProfileDropdown = () => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
      dispatch(logout());
      toast.success("Logout successfully!");
      window.location.href = "/login";
     
    };

    return (
        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar text-white bg-gradient-to-r from-indigo-500 to-purple-500">
          <UserCircleIcon className="h-6 w-6 " />
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link to="/orders">
            <MyOrder/></Link>
          </li>
          <li>
            <button onClick={handleLogout} className=" hover:bg-red-100 text-red-600" >Logout</button>
          </li>
        </ul>
      </div>
    );
};

export default ProfileDropdown;