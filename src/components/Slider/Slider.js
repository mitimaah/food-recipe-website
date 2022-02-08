import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const handleNextSlide = () => {
    if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  };

  const handleChangeDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.image} alt={obj.title} />
          </div>
        );
      })}
      <BtnSlider moveSlide={handleNextSlide} direction={"next"} />
      <BtnSlider moveSlide={handlePrevSlide} direction={"prev"} />

      <div className="container-dots">
        {dataSlider.map((item, index) => (
          <div
            onClick={() => handleChangeDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
