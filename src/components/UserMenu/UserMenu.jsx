import { useDispatch, useSelector } from "react-redux";
import { selectorsAuthUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectorsAuthUser);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <div>
        <button type="button" onClick={() => dispatch(logOut())}>
          Log Out
        </button>
      </div>
    </div>
  );
}
export default UserMenu;
