import React from "react";
import "./Titlecard.css";
import { useNavigate } from "react-router-dom";

const TitleCard = ({ image, title, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  return (
    <div className="title-card">
      <img src={image} alt={title} className="title-card-img" />
      <div className="title-card-overlay">
        <h3>{title}</h3>
        <button onClick={handleClick} className="title-card-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default TitleCard;
