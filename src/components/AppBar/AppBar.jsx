import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getName, isLogged } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { cleanCollection } from "../../redux/contacts/slice";

export default function AppBar() {
  const dispatch = useDispatch();
  function loggingOut() {
    dispatch(logout());
    dispatch(cleanCollection());
  }

  const logged = useSelector(isLogged);

  const userName = useSelector(getName);

  return (
    <div className="appbar-items">
      {logged ? (
        <>
          <div className="partForLogged">
            <p>Hello, {userName}</p>
            <button onClick={loggingOut}>LogOut</button>
          </div>
          <ul className="private-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </>
      ) : (
        <div className="partForUnLogged">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
}
