import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = useSelector((state) => state.auth.user);
  console.log("children, allowedRoles :- ",children, allowedRoles);
  

  // Not logged in
  console.log("user :- ",user);
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If roles exist & user does NOT match
  if (allowedRoles && !allowedRoles.includes(user.user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
