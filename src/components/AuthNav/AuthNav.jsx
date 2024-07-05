import { Link } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className="partForUnLogged">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
}
