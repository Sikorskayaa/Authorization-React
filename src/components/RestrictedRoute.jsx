import { useSelector } from "react-redux";
import { selectorsAuthIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

function RestrictedRoute({ component, redirectTo = "/" }) {
  const isLoggedIn = useSelector(selectorsAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : component;
}

export default RestrictedRoute;
