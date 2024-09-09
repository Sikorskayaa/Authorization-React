import { NavLink } from "react-router-dom";
import css from "./authNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/login" className={css.navLink}>
        Log In
      </NavLink>
      <NavLink to="/register" className={css.navLink}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
