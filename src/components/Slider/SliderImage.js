import React from "react";

export default function SliderImage({ slideIndex, obj, index }) {
  return (
    <div
      key={obj.id}
      className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
    >
      <img src={obj.image} alt={obj.title} />
    </div>
  );
}
