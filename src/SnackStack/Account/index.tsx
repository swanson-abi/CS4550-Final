import "./account-style.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Account() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="card p-5 shadow">
            <h2 className="mb-4">Account</h2>
            <div className="d-flex flex-column">
              <Link to="/Account/Signin" className="btn btn-primary mb-3">
                Sign in
              </Link>
              <Link to="/Account/Signup" className="btn btn-secondary mb-3">
                Sign up
              </Link>
              <Link to="/Account/Profile" className="btn btn-info">
                Profile
              </Link>
            </div>
          </div>
        </div>
      );
}