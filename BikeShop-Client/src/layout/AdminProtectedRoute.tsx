import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { selectCurrentUser, useCurrentToken } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
// import { verifyToken } from "../utils/verifyToken";

const AdminProtectedRoute = ({children}: {children: ReactNode}) => {
  const token = useAppSelector(useCurrentToken);

  const demo = useAppSelector(selectCurrentUser);

 
  if(demo && demo.role === "customer"){
    return <Navigate to="/" replace={true}/>
  }
  console.log("t", demo, token);
  return children
};

export default AdminProtectedRoute;
