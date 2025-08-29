import React from "react";
import "./Navbar.css";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import Logo from "../../assets/icon.jpeg";
import { useNavigate } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
};
  const home = () => {
    navigate("/");
  };
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
  const cart = () => {
    navigate("/cart");
};
 const { cartItems } = useContext(CartContext);
const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
        <CiMenuBurger className="lines" onClick={()=> setIsMenuOpen(!isMenuOpen)} />
          <ul className={`menu1 ${isMenuOpen ? "open" : ""}`}>
            
  <li onClick={men}>Men</li>
  <li onClick={women}>Women</li>
  <li onClick={trending}>Trending</li>
  <li onClick={sale}>Sale</li>
</ul>

        <img src={Logo} alt="Logo" className="logo-image" />
        <h2 className="logo"  onClick={home}>BlueBasket</h2>
        <ul className="menu">
          <li onClick={men}>Men</li>
          <li onClick={women}>Women</li>
          <li onClick={trending}>Trending</li>
          <li onClick={sale}>Sale</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <FaSearch className="search-icon" />
        </div>
        <FaUser  className="icon" onClick={login} />
        <FaShoppingCart className="icon" onClick={cart} />
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )
        }

      </div>
    </div>
  );
};

export default Navbar;
