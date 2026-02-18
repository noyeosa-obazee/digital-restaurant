import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <h2 className="logo-text">Chuks Kitchen</h2>
                    <p className="footer-motto">
                        Bringing the authentic <br /> flavors of Nigerian <br />{" "}
                        home cooking to your <br /> table, with passion <br />{" "}
                        and care.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>

                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="#">Explore</Link>
                        </li>
                        <li>
                            <Link to="/orders">My Orders</Link>
                        </li>
                        <li>
                            <Link to="#">Account</Link>
                        </li>
                        <li>
                            <Link to="#">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Contact Us</h4>

                    <ul>
                        <li>+234 801 234 5678</li>
                        <li>hello@chukskitchen.com</li>
                        <li>123 Taste Blvd, Lagos, Nigeria</li>
                    </ul>
                </div>

                <div className="footer-links">
                    <ul>
                        {" "}
                        <li>
                            <Link to="#">Facebook</Link>
                        </li>
                        <li>
                            <Link to="#">Twitter</Link>
                        </li>
                        <li>
                            <Link to="#">LinkedIn</Link>
                        </li>
                        <li>
                            <Link to="#">Instagram</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2020 Lift Media. All rights reserved.</p>
                <button className="scroll-top">↑</button>
            </div>
        </footer>
    );
};

export default Footer;
