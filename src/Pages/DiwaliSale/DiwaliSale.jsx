import React, { useContext } from "react";
import "./DiwaliSale.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { CartContext } from "../../Components/Context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

// Import all images
import d1 from "../../assets/d1.jpg";
import d2 from "../../assets/d2.jpg";
import d3 from "../../assets/d3.jpg";
import d4 from "../../assets/d4.jpg";
import d5 from "../../assets/d5.jpg";
import d6 from "../../assets/d6.jpg";
import d7 from "../../assets/d7.jpg";
import d8 from "../../assets/d8.jpg";
import d9 from "../../assets/d9.jpg";
import d10 from "../../assets/d10.jpg";

const products = [
  { id: 1, name: "Fairy Lights", price: 299, image: d1 },
  { id: 2, name: "Decorative Diyas", price: 199, image: d2 },
  { id: 3, name: "Sweets Box", price: 499, image: d3 },
  { id: 4, name: "Gift Hamper", price: 999, image: d4 },
  { id: 5, name: "Traditional Attire", price: 1499, image: d5 },
  { id: 6, name: "Rangoli Colors", price: 249, image: d6 },
  { id: 7, name: "Pooja Thali", price: 799, image: d7 },
  { id: 8, name: "Candles Set", price: 399, image: d8 },
  { id: 9, name: "Wall Hangings", price: 599, image: d9 },
  { id: 10, name: "Bulbs", price: 349, image: d10 },
];

const DiwaliSale = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const home = () => navigate("/");

  return (
    <>
      <Navbar />
      <div onClick={home} className="back-bt">
        <FaRegArrowAltCircleLeft />
      </div>
      <div className="sale-container">
        <header className="sale-header">
          <h1>✨ Diwali Dhamaka Sale ✨</h1>
          <p>Grab exciting offers this festive season!</p>
        </header>

        <div className="product-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiwaliSale;
