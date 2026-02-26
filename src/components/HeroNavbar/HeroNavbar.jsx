import "./HeroNavbar.css";
import { Link } from "react-router-dom";

const HeroNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-text">Chuks Kitchen</span>
      </div>
      <div className="">
        <Link to="/login">
          {" "}
          <button className="sign-in-btn">Sign In</button>
        </Link>
      </div>
    </nav>
  );
};

export default HeroNavbar;
