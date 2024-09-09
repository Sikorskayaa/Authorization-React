import { useDispatch, useSelector } from "react-redux";
import { selectorsAuthUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./userMenu.module.css";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectorsAuthUser);

  return (
    <div className={css.wrap}>
      <p>Name: {user.name}</p>
      \\//
      <p>Email: {user.email}</p>
      \\//
      <div>
        <button
          type="button"
          className={css.btn}
          onClick={() => dispatch(logOut())}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
export default UserMenu;
