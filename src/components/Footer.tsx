import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray">
      {/* Footer Container */}
      <div className="container py-10 px-5">
        {/* Logo Section */}
        <div className="text-center mb-5">
          <Link href="#">
            <Image
              className="m-auto"
              src="/logo.png"
              alt="logo"
              width={130}
              height={80}
              layout="intrinsic"
            />
          </Link>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mx-auto font-sm py-10">
          <Link className="hover:text-orange" href="#">
            Home
          </Link>
          <Link className="hover:text-orange" href="#">
            About Me
          </Link>
          <Link className="hover:text-orange" href="#">
            Services
          </Link>
          <Link className="hover:text-orange" href="#">
            Projects
          </Link>
          <Link className="hover:text-orange" href="#">
            Testimonials
          </Link>
          <Link className="hover:text-orange" href="#">
            Contact
          </Link>
        </div>

        {/* Social Icons Section */}
        <div className="flex justify-center gap-5 mb-5">
          <FaFacebook className="text-xl md:text-2xl hover:text-orange " />
          <FaTwitter className="text-xl md:text-2xl hover:text-orange" />
          <FaInstagram className="text-xl md:text-2xl hover:text-orange" />
          <FaLinkedin className="text-xl md:text-2xl hover:text-orange" />
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="bg-deepGray p-2 text-center text-xs md:text-sm">
        <p className="text-white">
          © 2023 <span className="text-orange">Mumair</span> All Rights
          Reserved, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
