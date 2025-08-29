import React from "react";
import "./DiwaliSale.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { CartContext } from "../../Components/Context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";


const products = [
  { id: 1, name: "Fairy Lights", price: 299, image: "src/assets/d1.jpg" },
  { id: 2, name: "Decorative Diyas", price: 199, image: "src/assets/d2.jpg" },
  { id: 3, name: "Sweets Box", price: 499, image: "src/assets/d3.jpg" },
  { id: 4, name: "Gift Hamper", price: 999, image: "src/assets/d4.jpg" },
    { id: 5, name: "Traditional Attire", price: 1499, image: "src/assets/d5.jpg" },
    { id: 6, name: "Rangoli Colors", price: 249, image: "src/assets/d6.jpg" },
    { id: 7, name: "Pooja Thali", price: 799, image: "src/assets/d7.jpg" },
    { id: 8, name: "Candles Set", price: 399,image: "src/assets/d8.jpg" },
    { id: 9, name: "Wall Hangings", price: 599, image: "src/assets/d9.jpg" },
    { id: 10, name: "Bulbs", price: 349, image: "src/assets/d10.jpg" },
];

const DiwaliSale = () => {
  const {addToCart} = useContext(CartContext);
    const navigate = useNavigate();
       const home = ()=>
        navigate("/")
  return (
    <>
    <Navbar />
    <div onClick={home} className="back-bt"><FaRegArrowAltCircleLeft /></div>
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
            <button onClick={()=>addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default DiwaliSale;
