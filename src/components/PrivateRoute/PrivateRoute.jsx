import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectToken } from "../../redux/auth/selectors";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const isLoggedUser = useSelector(selectIsLoggedIn);
  const isToken = useSelector(selectToken);
  if (!isLoggedUser && isToken) {
    return <p>Wait please...</p>;
  }
  if (!isLoggedUser && !isToken) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
}
