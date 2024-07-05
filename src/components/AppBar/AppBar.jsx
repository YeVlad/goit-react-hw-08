import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

export default function AppBar() {
  const logged = useSelector(selectIsLoggedIn);

  return (
    <div className="appbar-items">
      <Navigation />
      {logged ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
