"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/datas/testimonials"; // Assuming this data is available
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import CenterAligner from "./CenterAligner";

export default function Testimonial() {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Store the current slide index

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex); // Update the current slide index
    },
    customPaging: (i: number) => (
      <div
        style={{
          width: "20px",
          height: "4px",
          borderRadius: "4px",
          backgroundColor: i === currentSlide ? "#FF8233" : "#DDD", // Orange for active slide, grey for inactive
          transition: "background-color 0.3s ease-in-out",
        }}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          padding: "10px",
          bottom: "-32px;",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul className="flex space-x-3 mt-20"> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="paragraph-text py-5 text-center">
        <h2 className="font-bold text-3xl sm:text-4xl py-2">Testimonials</h2>
        <p className="py-6 text-justify md:text-center max-w-md md:max-w-lg mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
      </div>

      <CenterAligner className="bg-white min-h-0">
        <section className="max-w-[1100px] mx-auto w-full rounded-xl relative">
          <Slider {...settings} ref={sliderRef}>
            {testimonials.map((single, index) => {
              return (
                <div key={index} className="h-auto p-6">
                  <section className="mx-auto bg-gray p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 md:gap-8 rounded-xl overflow-hidden">
                    {/* Image Section */}
                    <div className="text-center space-y-5">
                      <div className="inline-block rounded-full p-2.5">
                        <div className="mx-auto w-[150px] h-[150px] rounded-full bg-gray-200 overflow-hidden">
                          <Image
                            src={single.img}
                            alt={single.name}
                            width={150}
                            height={150}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content Section */}
                    <div className="text-[16px] sm:text-[18px]">
                      <div className="text-orange text-[20px]">
                        <FaQuoteLeft />
                      </div>
                      <p
                        className="leading-[30px] font-bold text-sm sm:text-base text-gray-700 text-[#424242];
"
                      >
                        {single.testimonial}
                      </p>

                      <div className="text-orange text-[20px]">
                        <FaQuoteRight className="ml-auto" />
                      </div>

                      <div className="mt-4">
                        <p className="text-xl font-semibold">{single.name}</p>
                        <p className="text-gray-600">{single.profession}</p>
                      </div>
                    </div>
                  </section>
                </div>
              );
            })}
          </Slider>
        </section>
      </CenterAligner>
    </div>
  );
}
