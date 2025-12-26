"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev-studio-phi.vercel.app/api/v1/testimonials/getTestimonies")
      .then((response) => {
        const fetchedTestimonials = response.data && response.data.data;
        if (fetchedTestimonials && fetchedTestimonials.length > 0) {
          setTestimonials(fetchedTestimonials);
        } else {
          setTestimonials([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
        setTestimonials([]);
      });
  }, []);

  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };


  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });

  const isPC = !isMobile && !isTablet;

 
  const cardWidth = isMobile ? "300px" : isTablet ? "350px" : "430px";
  const cardHeight = isMobile ? "400px" : isTablet ? "450px" : "473px";
  const cardGap = isMobile ? "24px" : isTablet ? "36px" : "48px";

  const cardPaddingX = isMobile ? "20px" : isTablet ? "30px" : "50px";
  const cardPaddingY = isMobile ? "40px" : isTablet ? "60px" : "78px";

  const textContainerWidth = isMobile || isTablet ? "80%" : "314px";

  const containerClasses = `flex overflow-x-scroll scrollbar-hide whitespace-nowrap${
    testimonials.length <= 4 ? " justify-center" : ""
  }`;

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="pt-[52px] pb-[64px] flex flex-col gap-[60px] overflow-hidden relative w-full font-poppins">
      <div
        ref={containerRef}
        className={containerClasses}
        style={{ gap: cardGap }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center shrink-0 bg-[#252A24] rounded-[10px]"
            style={{
              width: cardWidth,
              height: cardHeight,
              padding: `${cardPaddingY} ${cardPaddingX}`,
              gap: "120px",
            }}
          >
            <p
              className="text-[#FEA650] font-medium text-[16px] text-wrap break-words whitespace-normal"
              style={{ width: textContainerWidth }}
            >
              {testimonial.testimony}
            </p>
            <h1
              className="text-[#F7FCFE] font-medium text-[24px] text-wrap break-words whitespace-normal"
              style={{ width: textContainerWidth }}
            >
              "{testimonial.name}"
            </h1>
          </div>
        ))}
      </div>

      {testimonials.length > 4 && (
        <>
          <button
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
          >
            <IoIosArrowBack size={24} className="text-white" />
          </button>
          <button
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition"
          >
            <IoIosArrowForward size={24} className="text-white" />
          </button>
        </>
      )}
    </section>
  );
};

export default Testimonial;
