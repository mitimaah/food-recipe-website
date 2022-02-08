import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import SliderImage from "./SliderImage";

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
          <SliderImage
            slideIndex={slideIndex}
            obj={obj}
            index={index}
          ></SliderImage>
        );
      })}
      <BtnSlider moveSlide={handleNextSlide} direction={"next"} />
      <BtnSlider moveSlide={handlePrevSlide} direction={"prev"} />

      <div className="container-dots">
        {dataSlider.map((item, index) => (
          <div
            key={index}
            onClick={() => handleChangeDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
