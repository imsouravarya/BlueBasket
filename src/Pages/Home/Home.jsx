import React, { useContext, useState } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import TitleCard from "../../Components/Titlecard/Titlecard";
import diwali from "../../assets/diwali.png";
import Footer from "../../Components/Footer/Footer";
import menImg from "../../assets/menImg.jpg";
import womenImg from "../../assets/womenImg.jpg";
import trendingImg from "../../assets/trendingImg.jpg";
import saleImg from "../../assets/saleImg.jpg";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Components/Context/CartContext";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const product = [
    { id: 1, name: "T-shirt", image: "/src/assets/jj1.jpg", price: 399 },
    { id: 2, name: "Trackpants", image: "/src/assets/jj2.jpg", price: 599 },
    { id: 3, name: "Leather Jacket", image: "/src/assets/jj3.jpg", price: 1599 },
    { id: 4, name: "White Dress", image: "/src/assets/jj4.jpg", price: 1999 },
    { id: 5, name: "White Sneaker", image: "/src/assets/jj5.jpg", price: 1299 },
    { id: 6, name: "Shirt", image: "/src/assets/jj6.jpg", price: 350 },
  ];

  const upcoming = [
    { id: 1, name: "Groceries", image: "/src/assets/kk1.jpg" },
    { id: 2, name: "Fruits & Vegetables", image: "/src/assets/kk2.jpg" },
    { id: 3, name: "Household needs", image: "/src/assets/kk3.jpg" },
    { id: 4, name: "Stationary", image: "/src/assets/kk4.jpg" },
  ];
  const navigate = useNavigate();
  const DiwaliSale = () => {
    navigate("/diwalisale");
  };
  const [addedId, setAddedId] = useState(null);
  return (
    <>
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
                <button onClick={() => {
                  addToCart(item);
                  setAddedId(item.id);
                  setTimeout(() => {
                    setAddedId(null);
                  }, 800);
                }}
                style={{
                  backgroundColor: addedId === item.id ? "green" : "blue"
                }}>
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
    </>
  );
};

export default Home;