import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2 className="logo-text">Chuks Kitchen</h2>
          <p>
            Bringing the authentic flavors of Nigerian home cooking to your
            table, with passion and care.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>My Order</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>+234 801 234 5678</p>
          <p>hello@chukskitchen.com</p>
        </div>

        <div className="footer-socials">
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 All rights reserved.</p>
        <button className="scroll-top">↑</button>
      </div>
    </footer>
  );
};

export default Footer;
