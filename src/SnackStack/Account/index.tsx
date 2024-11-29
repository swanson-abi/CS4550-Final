import { Routes, Route, Navigate } from "react-router";
import AccountNavigation from "./navigation";
import "./account-style.css";
import { useSelector } from "react-redux";
import Signin from "./signin";
import Profile from "./profile";
import Signup from "./signup";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div>
      <h2>Account</h2>
      <div className="d-flex"> 
        <div className="account-nav ms-auto"> 
          <AccountNavigation />
        </div>
        <div className="account-content">
          <Routes>
          <Route path="/" element={<Navigate to={ currentUser ? "/SnackStack/Account/Profile" : "/SnackStack/Account/Signin" }/>}/>
            <Route path="Signin" element={<Signin />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}