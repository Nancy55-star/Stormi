import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import zxcvbn from "zxcvbn"; // Import zxcvbn for password strength evaluation
import "./pass.css";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0); // State for password strength
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await axios.post(
        "https://Nancy55.pythonanywhere.com/api/signin",
        formData
      );

      if (response.data.user) {
        setSuccess(response.data.message);
        setLoading(false);
        setTimeout(() => navigate("/"), 1000);
      } else {
        setSuccess(response.data.message);
        setLoading(false);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setLoading(false);
    }
  };

  // Function to update password strength based on user input
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Evaluate password strength using zxcvbn
    const result = zxcvbn(newPassword);
    setPasswordStrength(result.score); // Score ranges from 0 (weak) to 4 (strong)
  };

  // Password strength meter component
  const renderPasswordStrengthMeter = () => {
    let meterClass = "weak";

    if (passwordStrength === 1) meterClass = "fair";
    if (passwordStrength === 2) meterClass = "good";
    if (passwordStrength === 3) meterClass = "strong";
    if (passwordStrength === 4) meterClass = "very-strong";

    return (
      <div className={`password-strength-meter ${meterClass}`}>
        <div className="password-strength-bar"></div>
        <span>{getPasswordStrengthLabel()}</span>
      </div>
    );
  };

  const getPasswordStrengthLabel = () => {
    switch (passwordStrength) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Very Strong";
      default:
        return "Very Weak";
    }
  };

  return (
    <>
      {loading && (
        <div style={overlayStyle}>
          <div style={spinnerStyle}></div>
        </div>
      )}

      <div className="row justify-content-center mt-4">
        <div className="col-md-6 card shadow p-4">
          <h2 className="mb-4 text-center">Signin Form</h2>

          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="form-control mb-3"
              value={password}
              onChange={handlePasswordChange} // Use the new handlePasswordChange function
              required
            />

            {/* Password Strength Meter */}
            {password && renderPasswordStrengthMeter()}

            <button
              className="btn btn-dark px-4 py-2 rounded-pill shadow-lg w-100"
              type="submit"
              disabled={loading}
            >
              Sign in
            </button>

            <p className="mt-3 text-center">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

// 💡 Inline CSS styles for overlay and spinner
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

// Add global keyframes using a style tag in your `index.html` or root component
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(styleTag);

export default Signin;
