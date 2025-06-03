import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  // console.log(location);
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <h2 className="text-5xl">Loading...........</h2>;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
