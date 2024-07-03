import { Link } from "react-router-dom";

export default function AppBar() {
  return (
    <div className="appbar-items">
      <div className="partForLogged">
        <p>Hellom, Name</p>
        <button>LogOut</button>
      </div>
      <div className="partForUnLogged">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}
