import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLogged = useSelector(selectIsLoggedIn);

  return (
    <ul className="private-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      {isLogged && (
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
      )}
    </ul>
  );
}
