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
    <div className="relative container py-7">
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
        <div className="hidden lg:flex lg:flex-row lg:gap-4 lg:justify-end text-sm md:text-base">
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40" // Overlay background
            onClick={toggleMenu} // Close menu on click
          />
          <div className="fixed top-0 right-0 w-2/3 sm:w-1/2 bg-white h-full z-50 shadow-lg p-5">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-800"
            >
              Close
            </button>
            <div className="flex flex-col space-y-4 mt-10">
              <Link className="hover:text-orange" href="#" onClick={toggleMenu}>
                Home
              </Link>
              <Link className="hover:text-orange" href="#" onClick={toggleMenu}>
                About Me
              </Link>
              <Link className="hover:text-orange" href="#" onClick={toggleMenu}>
                Services
              </Link>
              <Link className="hover:text-orange" href="#" onClick={toggleMenu}>
                Projects
              </Link>
              <Link className="hover:text-orange" href="#" onClick={toggleMenu}>
                Testimonials
              </Link>
              <Link className="hover:text-orange" href="#" onClick={toggleMenu}>
                Contact
              </Link>
              <Link
                className="bg-orange text-white px-3 py-2 rounded-lg text-center"
                href="#"
                onClick={toggleMenu}
              >
                Download CV
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
