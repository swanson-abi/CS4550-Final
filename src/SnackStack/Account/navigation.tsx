import { Link } from "react-router-dom";
import "./account-style.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation">
      <Link to={`/SnackStack/Account/Signin`}> Sign in </Link> <br />
      <Link to={`/SnackStack/Account/Signup`}> Sign up </Link> <br />
      <Link to={`/SnackStack/Account/Profile`}> Profile </Link> <br />
    </div>
  );
}