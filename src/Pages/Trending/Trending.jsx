import React, { useState } from "react";
import { products } from "../Products";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { CartContext } from "../../Components/Context/CartContext";
import { useContext } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Trending.css"

const Trending = () => {
  const {addToCart} = useContext(CartContext);
  const [addedId, setAddedId] = useState(null);
  const navigate = useNavigate();
       const home = ()=>
        navigate("/")

  return (
    <>
    <Navbar/>
    <div onClick={home} className="back-btt"><FaRegArrowAltCircleLeft /></div>
    <div className="banner">
      <img className="hell" src="/src/assets/trendingbg2.jpg" alt="" />
    </div>
    <div className="products-page">
      <h2>Trending Collection</h2>
      <div className="products-grid">
        {products.trending.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
                        <button onClick={()=>{addToCart(item);
              setAddedId(item.id);
              setTimeout(()=>{
              setAddedId(null);
            },800);
          }}
          style = {{
            backgroundColor:addedId === item.id? "green" : "blue"
          }}
          >
            {addedId === item.id ? "Added" : "Add to cart"}
          </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Trending;
