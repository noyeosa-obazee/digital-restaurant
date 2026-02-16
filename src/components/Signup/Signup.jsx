import { useState } from "react";
import familyMeal from "../../assets/images/family_meal.png";
import Footer from "../Footer/Footer";
import "./Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div>
      <div className="signup-container">
        {/* Left Side: Image with Overlay */}
        <div className="signup-image-section">
          <div className="image-overlay">
            <div className="overlay-content">
              <h1>Chuks Kitchen</h1>
              <p>
                Your journey to delicious, authentic Nigerian meals starts here.
                Sign up or log in to order your favorites today!
              </p>
            </div>
          </div>
          <img src={familyMeal} alt="Dining table" className="bg-image" />
        </div>

        {/* Right Side: Form */}
        <div className="signup-form-section">
          <div className="form-header">
            <span className="brand-script">Chuks Kitchen</span>
            <h2>Create Your Account</h2>
          </div>

          <form className="auth-form">
            {/* Email */}
            <div className="form-group">
              <label>Email</label>
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
                      id="mask0_139_526"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_139_526)">
                      <path
                        d="M3.33341 16.6667C2.87508 16.6667 2.48286 16.5037 2.15675 16.1775C1.83008 15.8509 1.66675 15.4584 1.66675 15V5.00004C1.66675 4.54171 1.83008 4.14948 2.15675 3.82337C2.48286 3.49671 2.87508 3.33337 3.33341 3.33337H16.6667C17.1251 3.33337 17.5176 3.49671 17.8442 3.82337C18.1704 4.14948 18.3334 4.54171 18.3334 5.00004V15C18.3334 15.4584 18.1704 15.8509 17.8442 16.1775C17.5176 16.5037 17.1251 16.6667 16.6667 16.6667H3.33341ZM10.0001 10.6875C10.0695 10.6875 10.1423 10.677 10.2184 10.6559C10.2951 10.6353 10.3681 10.6042 10.4376 10.5625L16.3334 6.87504C16.4445 6.8056 16.5279 6.71893 16.5834 6.61504C16.639 6.5106 16.6667 6.39587 16.6667 6.27087C16.6667 5.9931 16.5487 5.78476 16.3126 5.64587C16.0765 5.50699 15.8334 5.51393 15.5834 5.66671L10.0001 9.16671L4.41675 5.66671C4.16675 5.51393 3.92369 5.51032 3.68758 5.65587C3.45147 5.80199 3.33341 6.00699 3.33341 6.27087C3.33341 6.40976 3.36119 6.53115 3.41675 6.63504C3.4723 6.73949 3.55564 6.81948 3.66675 6.87504L9.56258 10.5625C9.63203 10.6042 9.70508 10.6353 9.78175 10.6559C9.85786 10.677 9.93064 10.6875 10.0001 10.6875Z"
                        fill="#616161"
                      />
                    </g>
                  </svg>
                </span>
                <input type="email" placeholder="name@gmail.com" required />
              </div>
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Phone number</label>
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
                      id="mask0_5972_168"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_5972_168)">
                      <path
                        d="M16.625 17.5C14.8333 17.5 13.0869 17.1006 11.3858 16.3017C9.68417 15.5033 8.17722 14.4478 6.865 13.135C5.55222 11.8228 4.49667 10.3158 3.69833 8.61417C2.89944 6.91306 2.5 5.16667 2.5 3.375C2.5 3.125 2.58333 2.91667 2.75 2.75C2.91667 2.58333 3.125 2.5 3.375 2.5H6.75C6.94444 2.5 7.11806 2.5625 7.27083 2.6875C7.42361 2.8125 7.51389 2.97222 7.54167 3.16667L8.08333 6.08333C8.11111 6.27778 8.10778 6.45472 8.07333 6.61417C8.03833 6.77417 7.95833 6.91667 7.83333 7.04167L5.83333 9.08333C6.41667 10.0833 7.14583 11.0208 8.02083 11.8958C8.89583 12.7708 9.86111 13.5278 10.9167 14.1667L12.875 12.2083C13 12.0833 13.1633 11.9894 13.365 11.9267C13.5661 11.8644 13.7639 11.8472 13.9583 11.875L16.8333 12.4583C17.0278 12.5 17.1875 12.5936 17.3125 12.7392C17.4375 12.8853 17.5 13.0556 17.5 13.25V16.625C17.5 16.875 17.4167 17.0833 17.25 17.25C17.0833 17.4167 16.875 17.5 16.625 17.5Z"
                        fill="#616161"
                      />
                    </g>
                  </svg>
                </span>
                <input type="tel" placeholder="8123340690" required />
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
                      id="mask0_139_534"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_139_534)">
                      <path
                        d="M4.99992 18.3333C4.54159 18.3333 4.14936 18.1702 3.82325 17.8441C3.49659 17.5174 3.33325 17.1249 3.33325 16.6666V8.33325C3.33325 7.87492 3.49659 7.48242 3.82325 7.15575C4.14936 6.82964 4.54159 6.66658 4.99992 6.66658H5.83325V4.99992C5.83325 3.84714 6.23964 2.86436 7.05242 2.05159C7.86464 1.23936 8.84714 0.833252 9.99992 0.833252C11.1527 0.833252 12.1355 1.23936 12.9483 2.05159C13.7605 2.86436 14.1666 3.84714 14.1666 4.99992V6.66658H14.9999C15.4583 6.66658 15.8508 6.82964 16.1774 7.15575C16.5035 7.48242 16.6666 7.87492 16.6666 8.33325V16.6666C16.6666 17.1249 16.5035 17.5174 16.1774 17.8441C15.8508 18.1702 15.4583 18.3333 14.9999 18.3333H4.99992ZM9.99992 14.1666C10.4583 14.1666 10.8508 14.0035 11.1774 13.6774C11.5035 13.3508 11.6666 12.9583 11.6666 12.4999C11.6666 12.0416 11.5035 11.6491 11.1774 11.3224C10.8508 10.9963 10.4583 10.8333 9.99992 10.8333C9.54158 10.8333 9.14936 10.9963 8.82325 11.3224C8.49659 11.6491 8.33325 12.0416 8.33325 12.4999C8.33325 12.9583 8.49659 13.3508 8.82325 13.6774C9.14936 14.0035 9.54158 14.1666 9.99992 14.1666ZM7.49992 6.66658H12.4999V4.99992C12.4999 4.30547 12.2569 3.7152 11.7708 3.22909C11.2846 2.74297 10.6944 2.49992 9.99992 2.49992C9.30547 2.49992 8.7152 2.74297 8.22908 3.22909C7.74297 3.7152 7.49992 4.30547 7.49992 4.99992V6.66658Z"
                        fill="#616161"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="QWE123#"
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
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <label>Confirm password</label>
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
                      id="mask0_139_824"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_139_824)">
                      <path
                        d="M4.99992 18.3333C4.54159 18.3333 4.14936 18.1702 3.82325 17.8441C3.49659 17.5174 3.33325 17.1249 3.33325 16.6666V8.33325C3.33325 7.87492 3.49659 7.48242 3.82325 7.15575C4.14936 6.82964 4.54159 6.66658 4.99992 6.66658H5.83325V4.99992C5.83325 3.84714 6.23964 2.86436 7.05242 2.05159C7.86464 1.23936 8.84714 0.833252 9.99992 0.833252C11.1527 0.833252 12.1355 1.23936 12.9483 2.05159C13.7605 2.86436 14.1666 3.84714 14.1666 4.99992V6.66658H14.9999C15.4583 6.66658 15.8508 6.82964 16.1774 7.15575C16.5035 7.48242 16.6666 7.87492 16.6666 8.33325V16.6666C16.6666 17.1249 16.5035 17.5174 16.1774 17.8441C15.8508 18.1702 15.4583 18.3333 14.9999 18.3333H4.99992ZM9.99992 14.1666C10.4583 14.1666 10.8508 14.0035 11.1774 13.6774C11.5035 13.3508 11.6666 12.9583 11.6666 12.4999C11.6666 12.0416 11.5035 11.6491 11.1774 11.3224C10.8508 10.9963 10.4583 10.8333 9.99992 10.8333C9.54158 10.8333 9.14936 10.9963 8.82325 11.3224C8.49659 11.6491 8.33325 12.0416 8.33325 12.4999C8.33325 12.9583 8.49659 13.3508 8.82325 13.6774C9.14936 14.0035 9.54158 14.1666 9.99992 14.1666ZM7.49992 6.66658H12.4999V4.99992C12.4999 4.30547 12.2569 3.7152 11.7708 3.22909C11.2846 2.74297 10.6944 2.49992 9.99992 2.49992C9.30547 2.49992 8.7152 2.74297 8.22908 3.22909C7.74297 3.7152 7.49992 4.30547 7.49992 4.99992V6.66658Z"
                        fill="#616161"
                      />
                    </g>
                  </svg>
                </span>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="QWE123#"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="form-checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms & Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
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
                      d="M29.9929 20.2391C29.9943 19.5589 29.9354 18.8799 29.8168 18.2097H20.2083V22.0553H25.7108C25.598 22.6697 25.3594 23.2553 25.0095 23.7768C24.6595 24.2984 24.2053 24.745 23.6745 25.0898V27.5851H26.9571C27.9595 26.6372 28.7477 25.4935 29.2706 24.2281C29.7936 22.9626 30.0397 21.6037 29.9929 20.2391Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M20.1859 29.9962C22.6679 30.0647 25.083 29.2025 26.9389 27.5856L23.6562 25.0903C22.8657 25.5863 21.9703 25.8992 21.0379 26.0054C20.1056 26.1115 19.1608 26.008 18.2754 25.7028C17.3899 25.3976 16.587 24.8987 15.9276 24.2439C15.2683 23.5891 14.7697 22.7957 14.4699 21.9238H11.0825V24.4958C11.9309 26.1495 13.2314 27.5396 14.8389 28.5109C16.4463 29.4822 18.2976 29.9964 20.1859 29.9962Z"
                      fill="#34A853"
                    />
                    <path
                      d="M14.4672 21.9153C14.0405 20.6751 14.0405 19.3319 14.4672 18.0917V15.5171H11.0833C10.3709 16.9086 10 18.444 10 20.0008C10 21.5577 10.3709 23.0931 11.0833 24.4846L14.4672 21.9153Z"
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
                      d="M24.6795 21.249L25.2494 17.6312H21.7387V15.2796C21.7387 14.2903 22.2288 13.3237 23.7961 13.3237H25.4147V10.2428C24.4721 10.0927 23.5197 10.0114 22.5651 9.99976C19.6756 9.99976 17.7891 11.7352 17.7891 14.8726V17.6312H14.5862V21.249H17.7891V29.9998H21.7387V21.249H24.6795Z"
                      fill="#337FFF"
                    />
                  </svg>
                </span>{" "}
                Continue with Apple
              </button>
            </div>

            <div className="form-footer">
              <p>
                Already have an account? <a href="#">Sign In</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
