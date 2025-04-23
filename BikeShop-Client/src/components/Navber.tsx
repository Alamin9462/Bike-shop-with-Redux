import { NavLink } from "react-router-dom";
import { ShoppingCartIcon, } from '@heroicons/react/24/outline';
import ProfileDropdown from "./ProfileDropdown";

const Navber = () => {

  const link = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/all-product">All Products</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
   
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-10">
            {link}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">BikeShop</NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-4 mr-2">
  
        <NavLink to="/cart" className="btn btn-ghost ">
          <ShoppingCartIcon className="h-6 w-6 text-purple-500 from-indigo-500 to-green-500" />
        </NavLink>

  
        <NavLink to="/profile" className="btn btn-ghost">
          <ProfileDropdown/>
        </NavLink>

      </div>
    </div>
  );
};

export default Navber;
