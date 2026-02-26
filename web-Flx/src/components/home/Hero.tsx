import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import img from '../../Assets/hero image.jpg';
import head from '../../Assets/headSet.jpg'

export const Hero = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      brandIcon: faApple,
      subtitle: "iPhone 14 Series",
      title: "Up to 10% \n off Voucher",
      image: img,
      bgColor: "bg-black"
    },
    {
      id: 2,
      brandIcon: faPlaystation,
      subtitle: "PlayStation 5",
      title: "New Era of \n Gaming",
      image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$",
      bgColor: "bg-black"
    },
    {
      id: 3,
      brandIcon: faHeadphones,
      subtitle: "Music Experience",
      title: "Enhance Your \n Listening",
      image: head,
      bgColor: "bg-black"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="container mx-auto px-4 mb-10 md:mb-20 pt-10">
      <div className="relative overflow-hidden rounded-lg shadow-xl">
        {/* Slides Container */}
        <div 
          className="transition-transform duration-700 ease-in-out flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className={`${slide.bgColor} text-white px-8 md:px-16 py-12 md:h-[450px] min-w-full relative flex items-center justify-between shrink-0`}
            >
              {/* Left Content */}
              <div className="z-10 flex flex-col gap-4 max-w-sm">
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon icon={slide.brandIcon} className="text-3xl md:text-4xl text-gray-200" />
                  <span className="text-sm md:text-base font-light tracking-wide text-gray-200">{slide.subtitle}</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-wide whitespace-pre-line">
                  {slide.title}
                </h1>
                
                <button className="flex items-center gap-2 w-fit group mt-4 text-white">
                  <span className="font-medium text-base border-b border-white pb-1 group-hover:text-gray-300 group-hover:border-gray-300 transition-all">
                    Shop Now
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-sm group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Right Image */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] h-full hidden md:flex items-center justify-center pointer-events-none">
                 {/* Glow effect */}
                 <div className="absolute w-[350px] h-[350px] bg-white/5 rounded-full blur-[100px]"></div>
                 <img 
                   src={slide.image} 
                   alt={slide.subtitle} 
                   className="relative z-10 object-contain h-[80%] w-auto mt-4 drop-shadow-2xl"
                 />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <div 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all border-2 border-white ${
                currentSlide === index 
                  ? 'bg-red-500 border-white' 
                  : 'bg-gray-500 border-transparent hover:bg-white'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};
