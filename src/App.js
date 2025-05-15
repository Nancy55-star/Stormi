import logo from "./logo.svg";
import "./App.css";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import AddSkincare from "./Components/AddSkincare";
import Home from "./Components/Home";
import Payment from "./Components/Payment";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import ContactUs from "./Components/ContactUs";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

import "bootstrap/dist/js/bootstrap.min.js";

import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Responsive Navbar using Bootstrap classes */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              S&M SKINCARE STUDIO
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">
                    Signin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addproducts" className="nav-link">
                    Add Skincare
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Header */}
        <header className="App-header">
          <h1 className="text-center ">S&M SKINCARE STUDIO</h1>
        </header>

        {/* Routes for page navigation */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/addproducts" element={<AddSkincare />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      {/* Footer Component */}
      <br />
      <Footer />
      <br />
    </div>
  );
}

export default App;
