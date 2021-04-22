import React, {  useState } from "react";
import "./App.css";
import Carousel from "./Carousal";
import TestComponent from "./TestComponent";

const config = [
  {
    id: "1",
    classTagName: "slide1",
    altsName: "slide1",
    imageSrc: "",
    altComponent: <TestComponent text="Slide1" />
  },
  {
    id: "2",
    classTagName: "slide2",
    altsName: "slide1",
    imageSrc: "",
    altComponent: <TestComponent text="Slide2" />
  },
  {
    id: "3",
    classTagName: "slide3",
    imageSrc: "https://picsum.photos/800",
    altsName: "slide3",
    altComponent: <TestComponent text="Slide3" />
  }
];


export default function App() {
  let [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    //optional function in case if you want to make this as controlled Component
    activeIndex = activeIndex + 1;
    activeIndex = activeIndex % config.length;
    setActiveIndex(activeIndex);
  }

  return (
    <div>
      <Carousel config={config} interval={2000} autoSlide={true} handleNext={handleNext} activeIndex={activeIndex} />
    </div>
  );
}
