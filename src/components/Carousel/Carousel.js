import React, { useState } from "react";

import Carousel1 from "../../assets/carousel-1.png";
import Carousel2 from "../../assets/carousel-2.png";
import Carousel3 from "../../assets/carousel-3.png";
import Carousel4 from "../../assets/carousel-4.png";
import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Carousel1, Carousel2, Carousel3, Carousel4];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel-box">
      <div className="carousel">
        <button onClick={goToPrevious}>&lt;</button>

        <div className="carousel-slides">
          {images.map((image, index) => (
            <img
              key={index}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              src={image}
              alt={`carousel${index}`}
            />
          ))}
        </div>

        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Carousel;
