import { Outlet } from "react-router-dom";
import Navber from "../components/Navber";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className=" mx-auto max-w-7xl sticky top-0 z-50 ">
      <Navber></Navber>
      <Outlet/>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
