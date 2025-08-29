import React, { useContext } from "react";
import "./Men.css";
import { products } from "../Products";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {CartContext} from "../../Components/Context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
const Men = () => {
  const {addToCart} = useContext(CartContext);
  const [addedId, setAddedId] = useState(null);
    const navigate = useNavigate();
  const home = ()=>
    navigate("/")

  return (
    <>
    <Navbar/>
    <div onClick={home} className="back-bt"><FaRegArrowAltCircleLeft /></div>
    <div className="banner">
      <img className="hell" src="/src/assets/menbg2.jpg" alt="" />
    </div>
    <div className="products-page">
      <h2>Men's Collection</h2>
<div className="products-grid">
  {products.men.map(item => (
    <div key={item.id} className="product-card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price}</p>
<button
  onClick={() => {
    addToCart(item);           // keep your cart logic
    setAddedId(item.id);       // mark this as added
    setTimeout(() => {
      setAddedId(null);        // reset after 2 sec
    }, 500);
  }}
  style={{
    backgroundColor: addedId === item.id ? "green" : "blue",
  }}
>
  {addedId === item.id ? "✓ Added" : "Add to Cart"}
</button>



    </div>
  ))}
</div>


    </div>
    <Footer/>
    </>
  );
};

export default Men;
