import { useSelector } from "react-redux";
import { selectorsAuthIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

function PrivateRoute({ component, redirectTo = "/login" }) {
  const isLoggedIn = useSelector(selectorsAuthIsLoggedIn);

  return isLoggedIn ? component : <Navigate to={redirectTo} replace />;
}

export default PrivateRoute;
