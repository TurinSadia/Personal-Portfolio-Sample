"use client";

import React, { useState } from "react";
import Image from "next/image";

// Example images (replace with actual paths or import statements)
const productImages: {
  [key in "UI/UX" | "Web Design" | "App Design" | "Graphic Design"]: string[];
} = {
  "UI/UX": ["/Group 24.png", "/Group 27.png"],
  "Web Design": ["/Group 24.png", "/Group 26.png", "/Group 27.png"],
  "App Design": ["/Group 24.png"],
  "Graphic Design": ["/Group 26.png", "/Group 27.png"],
};

const productsData = [
  { name: "UI/UX", filter: "UI/UX" },
  { name: "Web Design", filter: "Web Design" },
  { name: "App Design", filter: "App Design" },
  { name: "Graphic Design", filter: "Graphic Design" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterProducts = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
      <div className="paragraph-text py-5 text-center">
        <h2 className="font-bold text-3xl md:text-4xl py-2">My Projects</h2>
        <p className="py-6 text-justify md:text-center max-w-md md:max-w-lg mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus.
        </p>
      </div>

      <div className="filter-section py-7">
        {/* Filtering */}
        <ul className="flex gap-4 justify-center flex-wrap">
          {["All", "UI/UX", "Web Design", "App Design", "Graphic Design"].map(
            (filter, index) => (
              <li
                key={index}
                className={`cursor-pointer px-3 py-1 rounded-lg transition-colors duration-300 ${
                  activeFilter === filter
                    ? "bg-orange text-white"
                    : "bg-gray text-black border border-solid border-whiteGray"
                }`}
                onClick={() => filterProducts(filter)}
              >
                {filter}
              </li>
            )
          )}
        </ul>

        {/* Products Section */}
        <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 justify-center mt-10">
          {productsData
            .filter(
              (product) =>
                activeFilter === "All" || product.filter === activeFilter
            )
            .map((product, index) =>
              productImages[product.filter as keyof typeof productImages].map(
                (image, imgIndex) => (
                  <div
                    key={`${index}-${imgIndex}`}
                    className="product p-5 w-full h-auto flex flex-col justify-center items-center text-lg capitalize rounded-lg"
                  >
                    <Image
                      src={image}
                      alt={product.name}
                      width={400}
                      height={200}
                      className="object-cover mb-2"
                    />
                  </div>
                )
              )
            )}
        </div>
      </div>
    </div>
  );
}
