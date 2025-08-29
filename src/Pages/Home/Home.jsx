import React, { useContext, useState } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import TitleCard from "../../Components/Titlecard/Titlecard";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Components/Context/CartContext";

// Import assets
import diwali from "../../assets/diwali.png";
import menImg from "../../assets/menImg.jpg";
import womenImg from "../../assets/womenImg.jpg";
import trendingImg from "../../assets/trendingImg.jpg";
import saleImg from "../../assets/saleImg.jpg";

// Suggested products images
import jj1 from "../../assets/jj1.jpg";
import jj2 from "../../assets/jj2.jpg";
import jj3 from "../../assets/jj3.jpg";
import jj4 from "../../assets/jj4.jpg";
import jj5 from "../../assets/jj5.jpg";
import jj6 from "../../assets/jj6.jpg";

// Upcoming images
import kk1 from "../../assets/kk1.jpg";
import kk2 from "../../assets/kk2.jpg";
import kk3 from "../../assets/kk3.jpg";
import kk4 from "../../assets/kk4.jpg";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [addedId, setAddedId] = useState(null);
  const navigate = useNavigate();

  const DiwaliSale = () => {
    navigate("/diwalisale");
  };

  const product = [
    { id: 1, name: "T-shirt", image: jj1, price: 399 },
    { id: 2, name: "Trackpants", image: jj2, price: 599 },
    { id: 3, name: "Leather Jacket", image: jj3, price: 1599 },
    { id: 4, name: "White Dress", image: jj4, price: 1999 },
    { id: 5, name: "White Sneaker", image: jj5, price: 1299 },
    { id: 6, name: "Shirt", image: jj6, price: 350 },
  ];

  const upcoming = [
    { id: 1, name: "Groceries", image: kk1 },
    { id: 2, name: "Fruits & Vegetables", image: kk2 },
    { id: 3, name: "Household needs", image: kk3 },
    { id: 4, name: "Stationary", image: kk4 },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <div className="heading">
        <h2>sʜᴏᴘ ʙʏ ᴄᴀᴛᴇɢᴏʀʏ</h2>
      </div>

      {/* TitleCards Section */}
      <div className="title-cards-container">
        <TitleCard image={menImg} title="Men" path="/men" />
        <TitleCard image={womenImg} title="Women" path="/women" />
        <TitleCard image={trendingImg} title="Trending" path="/trending" />
        <TitleCard image={saleImg} title="Sale" path="/sale" />
      </div>

      <div className="home-trend"> 
        <h2>Special Festive Sale !!!</h2>
        <p>Discover the latest trends in fashion with upto 70% off this season</p>
        <img src={diwali} onClick={DiwaliSale} alt="diwali" />
        <h2>ʟɪᴠᴇ ғʀᴏᴍ ɴᴏᴠᴇᴍʙᴇʀ 𝟸𝟶𝟸𝟻....</h2>
      </div>

      <div className="suggested">
        <h1>Suggested for you</h1>
        <p>Based on your recent activity</p>
        <div className="products-gridd">
          {product.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <button
                onClick={() => {
                  addToCart(item);
                  setAddedId(item.id);
                  setTimeout(() => setAddedId(null), 800);
                }}
                style={{
                  backgroundColor: addedId === item.id ? "green" : "blue",
                }}
              >
                {addedId === item.id ? "Added" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="upcoming">
        <h1>Coming Soon on BlueBasket...</h1>
        <div className="products-gridd">
          {upcoming.map((item) => (
            <div key={item.id} className="product-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
