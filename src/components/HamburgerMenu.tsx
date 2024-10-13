"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa"; // Importing the hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu
  };

  return (
    <div className="container py-7">
      <div className="flex flex-wrap justify-between items-center w-full mx-auto font-xs">
        {/* Logo */}
        <div className="w-40 lg:w-52">
          <Link href="#">
            <Image src="/logo.png" alt="logo" width={130} height={80} />
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-gray-800">
            <FaBars size={24} />
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`flex-col lg:flex-row lg:flex lg:gap-4 lg:justify-end text-sm md:text-base justify-center items-center ${
            isOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          <Link className="hover:text-orange flex items-center" href="#">
            Home
          </Link>
          <Link className="hover:text-orange flex items-center" href="#">
            About Me
          </Link>
          <Link className="hover:text-orange flex items-center" href="#">
            Services
          </Link>
          <Link className="hover:text-orange flex items-center" href="#">
            Projects
          </Link>
          <Link className="hover:text-orange flex items-center" href="#">
            Testimonials
          </Link>
          <Link className="hover:text-orange flex items-center" href="#">
            Contact
          </Link>
          <Link
            className="bg-orange text-white px-3 py-2 rounded-lg flex items-center"
            href="#"
          >
            Download CV
          </Link>
        </div>
      </div>

      {/* Mobile Menu Background */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md mt-2 rounded-md p-4">
          <div className="flex flex-col">
            <Link className="hover:text-orange py-2" href="#">
              Home
            </Link>
            <Link className="hover:text-orange py-2" href="#">
              About Me
            </Link>
            <Link className="hover:text-orange py-2" href="#">
              Services
            </Link>
            <Link className="hover:text-orange py-2" href="#">
              Projects
            </Link>
            <Link className="hover:text-orange py-2" href="#">
              Testimonials
            </Link>
            <Link className="hover:text-orange py-2" href="#">
              Contact
            </Link>
            <Link
              className="bg-orange text-white px-3 py-2 rounded-lg text-center"
              href="#"
            >
              Download CV
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
