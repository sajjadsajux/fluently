import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useLocation } from "react-router";
import Loader from "../Utils/loader";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
