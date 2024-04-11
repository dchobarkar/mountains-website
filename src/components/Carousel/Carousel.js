import React, { useState } from "react";

import "./Carousel.css";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "../../assets/carousel-1.png",
    "../../assets/carousel-2.png",
    "../../assets/carousel-3.png",
    "../../assets/carousel-4.png",
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious}>&lt;</button>
      <div className="carousel-slides">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <button onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Carousel;
