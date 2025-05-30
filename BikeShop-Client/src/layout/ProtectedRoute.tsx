import { ReactNode } from "react";
import { useAppSelector } from "../redux/hook";
import { useCurrentToken } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
// import { verifyToken } from "../utils/verifyToken";

const ProtectedRoute = ({children}: {children: ReactNode}) => {
  const token = useAppSelector(useCurrentToken);


  if(!token){
    return <Navigate to="/login" replace={true}/>


  }
  return children
};

export default ProtectedRoute;
