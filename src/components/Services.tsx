import React from "react";
import Card from "../components/Card";

const Services = () => {
  return (
    <div className="container mx-auto pt-5 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Title and Description Section */}
      <div className="paragraph-text py-5 text-center">
        <h2 className="font-bold text-3xl md:text-4xl py-2">Services</h2>
        <p className="py-6 text-justify md:text-center max-w-md md:max-w-lg mx-auto text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra.
        </p>
      </div>

      {/* Cards Section */}
      <div className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 bg-white">
          {/* Card 1 */}
          <Card
            title="UI/UX"
            description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            imageUrl="/Vector.png"
          />
          {/* Card 2 */}
          <Card
            title="Web Design"
            description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            imageUrl="/Layer_1.png"
          />
          {/* Card 3 */}
          <Card
            title="App Design"
            description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            imageUrl="/Group 18.png"
          />
          {/* Card 4 */}
          <Card
            title="Graphic Design"
            description="Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
            imageUrl="/Vector (1).png"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
