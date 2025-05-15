import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#f8d7da", color: "#4b2e4a" }}
      className="pt-3"
    >
      <div className="row px-3 pb-3 justify-content-center">
        <div className="col-md-6">
          <h4 className="text-center">Stay Connected</h4>
          <div className="d-flex justify-content-center gap-3 mt-2">
            <a
              href="#"
              target="_blank"
              className="fs-4"
              style={{ color: "#4b2e4a" }}
              rel="noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="fs-4"
              style={{ color: "#4b2e4a" }}
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="fs-4"
              style={{ color: "#4b2e4a" }}
              rel="noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </div>
          <p className="mt-2 px-2 text-center">
            Follow us on social media for updates, skincare tips, and exclusive
            offers.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div style={{ backgroundColor: "#6c4c6b" }} className="text-center p-2">
        <small className="text-light">
          Developed by Thiong'o, &copy; 2025. All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
