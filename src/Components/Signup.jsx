import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import zxcvbn from "zxcvbn"; // Import zxcvbn for password strength
import "./pass.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0); // Password strength
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);

      const response = await axios.post(
        "https://Nancy55.pythonanywhere.com/api/signup",
        formData
      );

      toast.success(response.data.success || "Signup successful!");
      setLoading(false);

      // Redirect to home after short delay
      setTimeout(() => navigate("/"), 2500);
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      setError(message);
      toast.error(`Signup failed: ${message}`);
      setLoading(false);
    }
  };

  // Update password strength as user types
  const handlePasswordChange = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
    const result = zxcvbn(passwordInput);
    setPasswordStrength(result.score); // Set the password strength score
  };

  // Function to get password strength level text
  const getPasswordStrengthText = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      <ToastContainer />
      {loading && (
        <div style={overlayStyle}>
          <div style={spinnerStyle}></div>
        </div>
      )}

      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
          <h2 className="mb-4 text-center">Signup Form</h2>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control mb-3"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Phone number input with country flag and country code */}
            <PhoneInput
              placeholder="Enter phone number"
              value={phone}
              onChange={setPhone}
              className="form-control mb-3"
              defaultCountry="KE" // Default country to Kenya, which will show +254
              international
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            {/* Password Strength Meter */}
            <div className="password-strength">
              <div
                className={`strength-meter strength-${getPasswordStrengthText().toLowerCase()}`}
              />
              <small>{getPasswordStrengthText()}</small>
            </div>

            <button
              className="btn btn-dark w-100"
              type="submit"
              disabled={loading || passwordStrength < 3} // Disable if password strength is less than 3
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            <p className="mt-3 text-center">
              Already have an account? <Link to="/signin">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

// Spinner and overlay styles
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const spinnerStyle = {
  width: "60px",
  height: "60px",
  border: "8px solid #f3f3f3",
  borderTop: "8px solid #000",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

// Inject keyframes for spinner animation
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(styleTag);

export default Signup;
