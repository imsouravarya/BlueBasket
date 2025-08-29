import React from "react";
import { Carousel } from "react-bootstrap";
import "./Hero.css";
import hero1 from "../../assets/hero111.jpg";
import hero2 from "../../assets/hero222.jpg";
import hero3 from "../../assets/hero333.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      <Carousel>
        <Carousel.Item>
          <img className="heroimage" src={hero1} alt="First slide" />
          <Carousel.Caption>
            <h3>Grab your best fit</h3>
            <p>Best offers for you</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="heroimage" src={hero2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Exclusive Offers</h3>
            <p>Grab special discounts on top brands</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="heroimage" src={hero3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Shop Your Style</h3>
            <p>Find your perfect outfit for every occasion</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
