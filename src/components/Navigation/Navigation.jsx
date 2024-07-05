import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="private-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
    </ul>
  );
}
