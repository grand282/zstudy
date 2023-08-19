import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  src: string;
  alt: string;
}

interface SlideshowProps {
  slides: Slide[];
}

const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => (prevIndex + n) % slides.length);
  };

  const currentSlide = (n: number) => {
    setSlideIndex(n - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container h-[650px] w-full relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${slideIndex === index ? 'block' : 'hidden'}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            layout="fill"
          />
        </div>
      ))}

      {/* Next and previous buttons */}
      <a
        className="prev absolute top-1/2 text-3xl left-0 transform -translate-y-1/2 cursor-pointer"
        onClick={() => plusSlides(-1)}
      >
        &#10094;
      </a>
      <a
        className="next absolute top-1/2 text-3xl right-0 transform -translate-y-1/2 cursor-pointer"
        onClick={() => plusSlides(1)}
      >
        &#10095;
      </a>
    </div>
  );
};

export default Slideshow;
