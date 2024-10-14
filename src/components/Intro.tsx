import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "../components/Button";

const Intro = () => {
  return (
    <div className="container py-3 px-4 sm:px-6 lg:px-8">
      <div className="block sm:flex sm:justify-between items-center">
        {/* Left Column (Text Section) */}
        <div className="columns-1 sm:w-1/2">
          <div className="heading-text text-center sm:text-left">
            <h6 className="text-sm md:text-2xl">Hi, I am</h6>

            <strong className="text-orange text-xl md:text-2xl">
              Muhammad Umair
            </strong>

            <h1 className="text-4xl md:text-5xl font-bold">UI & UX</h1>
            <h1 className="text-4xl md:text-5xl sm:pl-16 font-bold">
              Designer
            </h1>
          </div>

          {/* Description Section */}
          <div className="py-6 text-left max-w-md mx-auto sm:mx-0 text-sm md:text-base">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra.
            </p>
          </div>

          {/* Button Section */}
          <div className="flex justify-center sm:justify-start py-4 font-normal capitalize">
            <Button text="HIRE ME" size="small" />
          </div>
        </div>

        {/* Right Column (Image and Social Media Icons) */}
        <div className="columns-1  sm:w-1/2 mt-8 sm:mt-0 flex flex-col items-center sm:items-center">
          {/* Profile Image */}
          <div className="mb-4">
            <Image
              className="m-auto w-56 h-64 sm:w-60 sm:h-64 md:w-72 md:h-80 lg:w-80 lg:h-96"
              src="/Group 2.png"
              alt="Group 2"
              width={350}
              height={350}
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-5">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
