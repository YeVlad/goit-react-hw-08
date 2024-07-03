import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { isLogged } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function AppBar() {
  const dispatch = useDispatch();
  function loggingOut() {
    dispatch(logout());
  }

  const logged = useSelector(isLogged);
  return (
    <div className="appbar-items">
      {logged ? (
        <div className="partForLogged">
          <p>Hellom, Name</p>
          <button onClick={loggingOut}>LogOut</button>
        </div>
      ) : (
        <div className="partForUnLogged">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
}
