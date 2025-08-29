import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../assets/icon.jpeg";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  const navigate = useNavigate();
  const men = () => {
    navigate("/men");
};
  const women = () => {
    navigate("/women");
};
  const trending = () => {
    navigate("/trending");
};
  const sale = () => {
    navigate("/sale");
};
const info = () => {
    navigate("/info");}
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="BlueBasket" />
          <h3>BlueBasket</h3>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li onClick={men}>Men</li>
            <li onClick={women}>Women</li>
            <li onClick={trending}>Trending</li>
            <li onClick={sale}>Sale</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li onClick={info}>About Us</li>
            <li onClick={info}>Careers</li>
            <li onClick={info}>Contact</li>
            <li onClick={info}>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 BlueBasket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
