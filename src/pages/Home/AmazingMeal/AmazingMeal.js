import React, { useState } from "react";

import "./AmazingMeal.css";

import image1 from "../../../assets/burger.jpg";
import image2 from "../../../assets/cheese.jpg";
import image3 from "../../../assets/cake.jpg";
import image4 from "../../../assets/coffee.jpg";
import image5 from "../../../assets/pizza.jpeg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from "react-icons/bs";

const AmazingMeal = () => {
  const [items, setItems] = useState([
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 5, url: image5 },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="section">
      <div className="container">
        <div className="amazing-container">
          <div className="amazing-carousal">
            <div>
              <Slider {...settings}>
                {items.map((item) => (
                  <div key={item.id}>
                    <img src={item.url} alt="caurosal pic" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="amazing-content">
            <h2 className="heading-secondary">
              Amazing meals <span className="ampersand">&#38;</span>
              <br />
              <span>
                Great <br /> Entertainment
              </span>
            </h2>

            <h4>We hope to see you soon!</h4>

            <p>
              Tacos is a full service bar and restaurant, featuring a large garden
              patio, offering creative Mexican fare that is tasty. Our menu features
              gourmet fish tacos, burritos, salads and quesadillas and tasty guacamole
              dip.
              <br />
              <br />
              Driven by the scents and colors of nature, within our humble walls, 
              we invite everyone to indulge in food, beverage and ambiance that is unequivocally unique to Tacos. 
              At Tacos, you can create your own burrito. Choose from over 50 filllings
              ranging from chicken and steak to mushrooms, brocoli and feta cheese.
              <br />
              <br />
              Tacos was born by the excellence of people working 
              hard to put their soul into your plate.
            </p>

            <blockquote>
            A poetic and irreverent experience awaits.            </blockquote>
          </div>
        </div>

        <div className="amazing-card-container">
          <div className="amazing-card amazing-card-left">
            <img src={image1} alt="burger" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  the best <span>ingredients</span>
                </h3>
              </div>

              <p>
              Tacos serves up a menu featuring niche ingredients sourced across North America.
              </p>
            </div>
          </div>

          <div className="amazing-card amazing-card-right">
            <img src={image2} alt="cheese" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>eclectic cuisine</span>
                </h3>
              </div>

              <p>
              We strive to redefine what great taste means by creating 
              innovative mock meat and seafood dishes
              </p>
            </div>
          </div>
          <div className="amazing-card amazing-card-right">
            <img src={image5} alt="cheese" className="amazing-card-image" />

            <div className="amazing-card-content">
              <div className="amazing-card-title">
                <BsFillStarFill color="#c3512f" />
                <h3 className="heading-tertiary">
                  <span>reservations</span>
                </h3>
              </div>

              <p>
                Receive up to $100 credit on your first weeks order.
                code: tacosdelight100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingMeal;
