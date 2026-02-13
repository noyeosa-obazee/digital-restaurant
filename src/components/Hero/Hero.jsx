import Navbar from "../Navbar/Navbar";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-image">
        <img src="/home.jpg" alt="Family sharing a Nigerian meal" />
      </div>

      <div className="hero-content">
        <Navbar />
        <div className="hero-main-text">
          <h1>
            Your Authentic <br />{" "}
            <span className="highlight">Taste of Nigeria</span>
          </h1>
          <p className="hero-description">
            Experience homemade flavors delivered fresh to your desk or home. We
            bring the rich culinary heritage of Nigeria right to your doorstep.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="icon-box">🍴</div>
              <p>Freshly Prepared</p>
            </div>
            <div className="feature-item">
              <div className="icon-box">🤝</div>
              <p>Support Local Business</p>
            </div>
            <div className="feature-item">
              <div className="icon-box">🚚</div>
              <p>Fast & Reliable Delivery</p>
            </div>
          </div>

          <div className="cta-group">
            <button className="btn-primary">Start Your Order</button>
            <button className="btn-secondary">Learn More About Us</button>
          </div>
        </div>
        <div className="hero-legal-footer">
          <p>
            © 2024 Chuks Kitchen. <a href="#">Privacy Policy</a>{" "}
            <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
