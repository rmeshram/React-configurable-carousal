
import React, { useEffect, useState } from "react";

export default (props) => {
  const {
    config = [],
    fade,
    interval = 2000,
    activeIndex = 0,
    autoSlide,
    handleNext 
  } = props || {};

  let [currentIndex, setCurrentIndex] = useState(activeIndex);
  let [data, setData] = useState(config[currentIndex]);

  const showNext = () => {
    currentIndex = currentIndex + 1;
    currentIndex = currentIndex % config.length;
    setCurrentIndex(currentIndex);
  };

  const showPrevious = () => {
    currentIndex = currentIndex - 1;
    currentIndex = currentIndex % config.length;
    if (currentIndex === -1) currentIndex = config.length - 1;
    setCurrentIndex(currentIndex);
  };

  useEffect(() => {
    setData(config[currentIndex])
  }, [currentIndex]);

  useEffect(() => {
    setCurrentIndex(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    if (!autoSlide) return;
    const id = setInterval(() => {
      if (handleNext) {
        handleNext();
        return;
      }
      showNext();
    }, interval);
    return () => clearInterval(id);
  }, []);

  const { id, altsName, imageSrc, altComponent: AltComponent } = data || {};

  return (
    <div className="carousel-container">
      <a className="left-arrow" onClick={showPrevious}>
        {" "}
        &#10094;
      </a>
      <div key={id} className="slide">
        {!!imageSrc ? <img src={imageSrc} alt={altsName} /> : AltComponent}
      </div>
      <a className="right-arrow" onClick={handleNext || showNext}>
        {" "}
        &#10095;
      </a>
    </div>
  );
}
