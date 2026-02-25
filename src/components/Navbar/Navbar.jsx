import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? "active-link" : "");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="navbar-logo"
        style={{ textDecoration: "none" }}
        onClick={closeMenu}
      >
        <span className="logo-text">Chuks Kitchen</span>
      </Link>

      {/* Desktop Links */}
      <div className="navbar-links">
        <Link to="/home" className={`nav-link ${isActive("/home")}`}>
          Home
        </Link>
        <Link to="#" className={`nav-link ${isActive("#")}`}>
          Explore
        </Link>
        <Link to="/orders" className={`nav-link ${isActive("/orders")}`}>
          My Orders
        </Link>
        <Link to="#" className={`nav-link ${isActive("#")}`}>
          Account
        </Link>
      </div>

      {/* Desktop Actions */}
      <div className="navbar-actions">
        <button
          className="sign-in-btn filled"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>

      {/* Hamburger Button */}
      <button
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-links">
          <Link
            to="/home"
            className={`nav-link ${isActive("/home")}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="#"
            className={`nav-link ${isActive("#")}`}
            onClick={closeMenu}
          >
            Explore
          </Link>
          <Link
            to="/orders"
            className={`nav-link ${isActive("/orders")}`}
            onClick={closeMenu}
          >
            My Orders
          </Link>
          <Link
            to="#"
            className={`nav-link ${isActive("#")}`}
            onClick={closeMenu}
          >
            Account
          </Link>
        </div>
        <div className="mobile-menu-actions">
          <button
            className="sign-in-btn filled"
            onClick={() => handleNavigation("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
