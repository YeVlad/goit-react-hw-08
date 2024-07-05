import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();
  function loggingOut() {
    dispatch(logout());
  }

  return (
    <div className="partForLogged">
      <p>Hello, {userName}</p>
      <button onClick={loggingOut}>LogOut</button>
    </div>
  );
}
