import React, { useEffect, useState } from "react";
import {
  SliderContainer,
  Slide,
  SlideImage,
  ArrowButton,
  DotContainer,
  Dot,
} from "./ImageSlider.styled";
import { Icons } from "../../../assets/icons/Icons";

const slideData = [
  { img: "/images/imageslider1.png", link: "" }, // TODO: thêm ảnh và link
  { img: "/images/imageslider1.png", link: "" },
  { img: "/images/imageslider1.png", link: "" },
  { img: "/images/imageslider1.png", link: "" },
  { img: "/images/imageslider1.png", link: "" },
  { img: "/images/imageslider1.png", link: "" },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = slideData.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  // Tự chạy slide mỗi 5s
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SliderContainer>
      {slideData.map((slide, index) => (
        <Slide $active={index === current} key={index}>
          {slide.img &&  (
            <a href={slide.link || "#"}>
              <SlideImage src={slide.img} alt={`slide-${index}`} />
            </a>
          )}
        </Slide>
      ))}

      <ArrowButton className="left" onClick={prevSlide}>
        <Icons.ArrowLeft size={24} />
      </ArrowButton>
      <ArrowButton className="right" onClick={nextSlide}>
        <Icons.ArrowRight size={24} />
      </ArrowButton>
      {/* dấu chấm dưới slider */}
      <DotContainer>
        {slideData.map((_, index) => (
          <Dot
            key={index}
            $active={index === current}
            onClick={() => setCurrent(index)}
          />
        ))}
      </DotContainer>
    </SliderContainer>
  );
};

export default ImageSlider;
