import React, { useContext } from "react";
import { CartContext } from "../../Components/Context/CartContext";
import "./Cart.css";
import Navbar from "../../Components/Navbar/Navbar";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const navigate = useNavigate();
  const gohome = () => {
    navigate("/");
  };

  const ending = () => {
    navigate("/ending");
  };

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div onClick={gohome} className="back-btn"><IoArrowBackCircleOutline /></div>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    className="iimage"
                    src={item.image}
                    alt={item.name}
                    width={50}
                  />
                  <span className="iname">{item.name}</span>
                  <span className="iprice">₹{item.price}</span>

                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="total">Total: ₹{totalPrice}</h3>
          </>
        )}
      </div>
      <div className="last"><button onClick={ending}>Proceed to Check out <FaArrowRight /> </button></div>
      <Footer/>
    </>
  );
};

export default Cart;
