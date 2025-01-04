import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---- Left Section --- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="logo" />
          <p className="w-full md:w-[70%] text-gray-600 leading-6">
            At Prescripto, we understand the importance of healthcare
            accessibility and convenience. Our platform is designed to simplify
            the process of booking doctor appointments, ensuring you receive the
            care you need when you need it.
          </p>
        </div>

        {/* ---- Center Section --- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ---- Right Section --- */}
        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+93 749676801</li>
            <li>wahidullah.karimi22@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* ---- CopyRight Text ---- */}
      <div>
        <p className="py-5 text-sm text-center">
          Copyright 2025 © Prescripto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
