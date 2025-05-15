import React from "react";
import image from "./fb.png";
import pic from "./in.png";
import photo from "./x.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Add icons for better UI
import "./about.css";
function AboutUs() {
  return (
    <div className="about-us-container">
      <section className="about-section">
        <div className="row justify-content-center">
          {/* About Us Section */}
          <div className="col-md-8 col-lg-6 text-center mb-5">
            <h2 className="section-title mb-4">Welcome to S&M</h2>
            <p className="about-text text-muted">
              At S&M, we believe skincare is not just about beauty, but about
              self-care. Our mission is to provide unique, high-quality skincare
              solutions that empower you to embrace your natural beauty. We're
              committed to creating products that nourish your skin, enhance
              your glow, and restore your confidence.
            </p>
            <p className="about-text text-muted">
              From simple daily essentials to more advanced care, we offer
              products that cater to all your skincare needs. Let us guide you
              on the journey to healthier, more radiant skin.
            </p>
            <h6 className="cta-text">
              Shop with us and experience the best in skincare.
            </h6>
          </div>

          {/* Location Section */}
          <div className="col-md-8 col-lg-6 text-center mb-5">
            <h2 className="section-title mb-4">Our Location</h2>
            <p className="about-text text-muted">
              Visit us at our store on Ngong Road, located in the heart of
              Terry's Business Plaza. It's where all our skincare magic happens!
            </p>
            <p className="about-text text-muted">
              We invite you to explore our product range in-store, ask our
              experts for personalized recommendations, or simply enjoy the
              experience of browsing through our curated skincare selections.
            </p>
            <h6 className="cta-text">
              Come visit us and feel the glow in person!
            </h6>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <div className="text-center mb-4">
        <h4 className="social-title">Follow Us</h4>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={40} color="#3b5998" className="social-icon" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} color="#e4405f" className="social-icon" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={40} color="#1da1f2" className="social-icon" />
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer text-center mt-4">
        <p>
          Don't hesitate to contact us on all our social media platforms.
          <br />
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
