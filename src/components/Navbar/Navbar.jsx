import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // To check which page is active

    // Helper to check active state
    const isActive = (path) =>
        location.pathname === path ? "active-link" : "";

    return (
        <nav className="navbar">
            <Link
                to="/"
                className="navbar-logo"
                style={{ textDecoration: "none" }}
            >
                <span className="logo-text">Chuks Kitchen</span>
            </Link>

            {/* Centered Links (Visible on larger screens) */}
            <div className="navbar-links">
                <Link to="/home" className={`nav-link ${isActive("/home")}`}>
                    Home
                </Link>
                <Link to="#" className={`nav-link ${isActive("#")}`}>
                    Explore
                </Link>
                <Link
                    to="/orders"
                    className={`nav-link ${isActive("/orders")}`}
                >
                    My Orders
                </Link>
                <Link to="#" className={`nav-link ${isActive("#")}`}>
                    Account
                </Link>
            </div>

            <div className="navbar-actions">
                {/* If we are on orders page, show Login button as per image,
            or Logout if you prefer logic. Sticking to image: */}
                <button
                    className="sign-in-btn filled"
                    onClick={() => navigate("/login")}
                >
                    Login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
