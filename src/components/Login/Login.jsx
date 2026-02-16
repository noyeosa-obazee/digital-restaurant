import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import familyMeal from "../../assets/images/family_meal.png";
import Footer from "../Footer/Footer";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for login goes here
    console.log("Logging in...");
    navigate("/"); // Navigate to home on success
  };

  return (
    <div>
      <div className="login-container">
        {/* Left Side: Image with Overlay (Reusable Layout) */}
        <div className="login-image-section">
          <div className="image-overlay">
            <div className="overlay-content">
              <h1>Chuks Kitchen</h1>
              <p>
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </p>
            </div>
          </div>
          <img src={familyMeal} alt="Family dining" className="bg-image" />
        </div>

        {/* Right Side: Login Form */}
        <div className="login-form-section">
          <div className="form-header">
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="brand-script">Chuks Kitchen</span>
            </Link>
            <h2>Login your Account</h2>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            {/* Email or Phone */}
            <div className="form-group">
              <label>Email or phone number</label>
              <div className="input-wrapper">
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_139_472"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_139_472)">
                      <path
                        d="M3.33341 16.6667C2.87508 16.6667 2.48286 16.5036 2.15675 16.1775C1.83008 15.8508 1.66675 15.4583 1.66675 15V5.00001C1.66675 4.54168 1.83008 4.14945 2.15675 3.82334C2.48286 3.49668 2.87508 3.33334 3.33341 3.33334H16.6667C17.1251 3.33334 17.5176 3.49668 17.8442 3.82334C18.1704 4.14945 18.3334 4.54168 18.3334 5.00001V15C18.3334 15.4583 18.1704 15.8508 17.8442 16.1775C17.5176 16.5036 17.1251 16.6667 16.6667 16.6667H3.33341ZM10.0001 10.6875C10.0695 10.6875 10.1423 10.677 10.2184 10.6558C10.2951 10.6353 10.3681 10.6042 10.4376 10.5625L16.3334 6.87501C16.4445 6.80557 16.5279 6.7189 16.5834 6.61501C16.639 6.51057 16.6667 6.39584 16.6667 6.27084C16.6667 5.99307 16.5487 5.78473 16.3126 5.64584C16.0765 5.50695 15.8334 5.5139 15.5834 5.66668L10.0001 9.16668L4.41675 5.66668C4.16675 5.5139 3.92369 5.51029 3.68758 5.65584C3.45147 5.80195 3.33341 6.00695 3.33341 6.27084C3.33341 6.40973 3.36119 6.53112 3.41675 6.63501C3.4723 6.73945 3.55564 6.81945 3.66675 6.87501L9.56258 10.5625C9.63203 10.6042 9.70508 10.6353 9.78175 10.6558C9.85786 10.677 9.93064 10.6875 10.0001 10.6875Z"
                        fill="#616161"
                      />
                    </g>
                  </svg>
                </span>
                <input type="text" placeholder="name@gmail.com" required />
              </div>
            </div>

            {/* Password */}
            <div className="form-group">
              <label>Password</label>
              <div className="input-wrapper">
                <span className="icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_139_480"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_139_480)">
                      <path
                        d="M4.99992 18.3333C4.54159 18.3333 4.14936 18.1703 3.82325 17.8442C3.49659 17.5175 3.33325 17.125 3.33325 16.6667V8.33334C3.33325 7.87501 3.49659 7.48251 3.82325 7.15584C4.14936 6.82973 4.54159 6.66668 4.99992 6.66668H5.83325V5.00001C5.83325 3.84723 6.23964 2.86445 7.05242 2.05168C7.86464 1.23945 8.84714 0.833344 9.99992 0.833344C11.1527 0.833344 12.1355 1.23945 12.9483 2.05168C13.7605 2.86445 14.1666 3.84723 14.1666 5.00001V6.66668H14.9999C15.4583 6.66668 15.8508 6.82973 16.1774 7.15584C16.5035 7.48251 16.6666 7.87501 16.6666 8.33334V16.6667C16.6666 17.125 16.5035 17.5175 16.1774 17.8442C15.8508 18.1703 15.4583 18.3333 14.9999 18.3333H4.99992ZM9.99992 14.1667C10.4583 14.1667 10.8508 14.0036 11.1774 13.6775C11.5035 13.3508 11.6666 12.9583 11.6666 12.5C11.6666 12.0417 11.5035 11.6492 11.1774 11.3225C10.8508 10.9964 10.4583 10.8333 9.99992 10.8333C9.54158 10.8333 9.14936 10.9964 8.82325 11.3225C8.49659 11.6492 8.33325 12.0417 8.33325 12.5C8.33325 12.9583 8.49659 13.3508 8.82325 13.6775C9.14936 14.0036 9.54158 14.1667 9.99992 14.1667ZM7.49992 6.66668H12.4999V5.00001C12.4999 4.30557 12.2569 3.71529 11.7708 3.22918C11.2846 2.74307 10.6944 2.50001 9.99992 2.50001C9.30547 2.50001 8.7152 2.74307 8.22908 3.22918C7.74297 3.71529 7.49992 4.30557 7.49992 5.00001V6.66668Z"
                        fill="#616161"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="******"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              {/* Forgot Password Link */}
              <div className="forgot-password-link">
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn-submit">
              Continue
            </button>

            <div className="divider">Or continue with</div>

            {/* Social Auth */}
            <div className="social-buttons">
              <button type="button" className="btn-social">
                <span className="social-icon google">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.9929 20.2391C29.9943 19.5589 29.9354 18.8799 29.8168 18.2097H20.2083V22.0552H25.7108C25.598 22.6696 25.3594 23.2552 25.0095 23.7768C24.6595 24.2983 24.2053 24.7449 23.6745 25.0897V27.585H26.9571C27.9595 26.6371 28.7477 25.4934 29.2706 24.228C29.7936 22.9626 30.0397 21.6036 29.9929 20.2391Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M20.1859 29.9962C22.6679 30.0647 25.083 29.2025 26.9389 27.5856L23.6562 25.0903C22.8657 25.5863 21.9703 25.8992 21.0379 26.0054C20.1056 26.1115 19.1608 26.008 18.2754 25.7028C17.3899 25.3976 16.587 24.8987 15.9276 24.2439C15.2683 23.5891 14.7697 22.7957 14.4699 21.9238H11.0825V24.4958C11.9309 26.1495 13.2314 27.5396 14.8389 28.5109C16.4463 29.4822 18.2976 29.9964 20.1859 29.9962Z"
                      fill="#34A853"
                    />
                    <path
                      d="M14.4672 21.9152C14.0405 20.675 14.0405 19.3318 14.4672 18.0916V15.517H11.0833C10.3709 16.9085 10 18.4438 10 20.0007C10 21.5576 10.3709 23.093 11.0833 24.4845L14.4672 21.9152Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M20.1988 13.9542C21.6531 13.931 23.0586 14.4686 24.1124 15.4512L27.0252 12.6C25.1774 10.9026 22.7317 9.97123 20.1995 10.0007C18.3085 9.99969 16.4545 10.5141 14.8446 11.4863C13.2346 12.4586 11.9321 13.8505 11.0825 15.5065L14.4712 18.0784C14.8668 16.8906 15.6319 15.8541 16.6592 15.1144C17.6864 14.3747 18.9243 13.969 20.1988 13.9542Z"
                      fill="#EA4335"
                    />
                  </svg>
                </span>{" "}
                Continue with Google
              </button>
              <button type="button" className="btn-social">
                <span className="social-icon apple">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.6795 21.2492L25.2494 17.6313H21.7387V15.2797C21.7387 14.2904 22.2288 13.3238 23.7961 13.3238H25.4147V10.243C24.4721 10.0928 23.5197 10.0115 22.5651 9.99988C19.6756 9.99988 17.7891 11.7353 17.7891 14.8727V17.6313H14.5862V21.2492H17.7891V29.9999H21.7387V21.2492H24.6795Z"
                      fill="#337FFF"
                    />
                  </svg>
                </span>{" "}
                Continue with Apple
              </button>
            </div>

            <div className="form-footer">
              <p>
                Don't have an account?{" "}
                <Link to="/signup">Create an account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
