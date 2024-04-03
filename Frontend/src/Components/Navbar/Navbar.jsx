import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../../Assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const StoredToken = sessionStorage.getItem("Token");
    setIsLoggedIn(!!StoredToken);
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("Token:");
    localStorage.removeItem("Datauser:");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <img src={logo} className="logo" alt="Logo" />
        </Link>

        <div className={`menu-container ${isOpen ? "active" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                Booking
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={toggleMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/service" onClick={toggleMenu}>
                Service
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactUs" onClick={toggleMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="menu-buttons">
            {isLoggedIn ? (
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
                <button className="btn" onClick={toggleMenu}>
                  <Link to="/Login">Login</Link>
                </button>
                <button className="btn" onClick={toggleMenu}>
                  <Link to="/signup">Sign up</Link>
                </button>
              </>
            )}
          </div>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <ImCross /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
