import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SnackStackNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/SnackStack/Dashboard", icon: AiOutlineDashboard },
        { label: "CookBooks", path: "/SnackStack/CookBooks", icon: LiaBookSolid },
        { label: "Calendar", path: "/SnackStack/Calendar", icon: IoCalendarOutline },
        { label: "Inbox", path: "/SnackStack/Inbox", icon: FaInbox },
    ];

    return (
        <nav className="navbar navbar-expand-md" style={{ backgroundColor: "#add8e6" }}>
            <div className="container-fluid justify-content-center">
               
                {/* Toggle Button for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        {/* Account Link */}
                        <li className="nav-item">
                            <Link
                                to="/SnackStack/Account"
                                className={`nav-link ${
                                    pathname.includes("Account") ? "text-danger" : "text-dark"
                                }`}
                            >
                                <FaRegCircleUser className="me-2" />
                                Account
                            </Link>
                        </li>

                        {/* Dynamic Links */}
                        {links.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`nav-link ${
                                        pathname.includes(link.label) ? "text-danger" : "text-dark"
                                    }`}
                                >
                                    <link.icon className="me-2" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
