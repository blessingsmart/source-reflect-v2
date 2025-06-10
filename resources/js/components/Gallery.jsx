import React, { useState, useEffect, useRef, useCallback } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  const intervalTime = 5000;

  const nextSlide = useCallback(() => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  }, [currentSlide, slideLength]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  const slideInterval = useRef(null);

  const auto = useCallback(() => {
    slideInterval.current = setInterval(nextSlide, intervalTime);
  }, [nextSlide]);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [autoScroll, currentSlide, auto]);

  return (
    <div className="w-full h-[50vh] relative overflow-hidden">
      <AiOutlineArrowLeft
        className="arrow prev absolute z-10 top-[35%] left-2 text-white border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-gray-700"
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className="arrow next absolute z-10 top-[35%] right-2 text-white border-2 border-white rounded-full cursor-pointer hover:bg-white hover:text-gray-700"
        onClick={nextSlide}
      />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={`absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-500 ${
              index === currentSlide ? "opacity-100" : ""
            }`}
            key={index}
          >
            {index === currentSlide && (
              <div className="h-full">
                <img
                  src={slide.image}
                  alt="slide"
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;