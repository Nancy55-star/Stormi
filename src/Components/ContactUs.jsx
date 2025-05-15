import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaComment,
  FaStar,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa"; // Import social media icons
import "./contactus.css";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Message Sent:", { email, comment, rating });

    // Show success notification
    toast.success("Thank you for your response!");

    // Optionally, clear the form fields after submission
    setEmail("");
    setComment("");
    setRating(0);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <ToastContainer />
      <div className="contact-us-container">
        <div className="contact-form-card">
          <h4 className="text-center mb-4">CONTACT US</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="comment" className="form-label">
                Comment
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FaComment />
                  </span>
                </div>
                <textarea
                  id="comment"
                  className="form-control"
                  rows="5"
                  placeholder="Leave a Comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>

            {/* Rating Component */}
            <div className="mb-3">
              <label className="d-block">Rating</label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${rating >= star ? "filled" : ""}`}
                    onClick={() => handleRatingChange(star)}
                    style={{
                      cursor: "pointer",
                      fontSize: "30px",
                      color: rating >= star ? "#FFD700" : "#ccc",
                      transition: "color 0.3s ease",
                    }}
                  >
                    <FaStar />
                  </span>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className="social-media mt-4 text-center">
            <h5>Follow us on</h5>
            <div>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
