import React from "react";
import "./Ending.css";

const Ending = () => {
  return (
    <div className="ending-container">
      <div className="ending-card">
        <div className="checkmark-wrapper">
          <div className="checkmark">✓</div>
        </div>
        <h1 className="ending-title">Order Placed!</h1>
        <p className="ending-message">
          Thank you for shopping with <span className="brand">BlueBasket</span>.  
          Your order has been successfully placed.
        </p>
        <button
          className="ending-button"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Ending;
