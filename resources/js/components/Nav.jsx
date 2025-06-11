import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Twitter, Linkedin, Phone } from 'lucide-react';
import { Icon } from "./icon";

const Nav = () => {
  const [nav, setNav] = useState(false);

  const scrollTo = (to) => {
    setNav(false); // Close the mobile menu when clicking a link
    scroll.scrollTo(to);
  };

  const links = [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/about", title: "About Us" },
    { id: 3, to: "Shop", title: "Shop" }, // Smooth Scroll
    { id: 4, href: "/partner-with-us", title: "Partner With Us" },
    { id: 5, href: "/blog", title: "Blog" }, 
  ];

  return (
  <div className="fixed z-50">
    <div className="flex gap-3 items-center pl-10 h-10 bg-gray-200 text-gray-400">
      <Icon iconNode={Twitter} className=" size-5 "/>
      <Icon iconNode={Linkedin} className=" size-5"/>
      <h2 className="text-sm ">Welcome to Source Reflect</h2>
    </div>

    <div className="flex justify-between drop-shadow-md sm:px-10 items-center w-screen h-26 bg-white">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src={logo} alt="mainlogo" className="w-10 h-10 mr-2" />
        <h1 className="text-lg md:text-xl text-black">SOURCE REFLECT</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, href, title, to }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-700 hover:scale-105 duration-200">
            {to ? (
              <ScrollLink to={to} smooth={true} duration={500} className="cursor-pointer">
                {title}
              </ScrollLink>
            ) : (
              <Link href={href} onClick={() => setNav(false)}>
                {title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-green-600 to-lime-600">
          {links.map(({ id, href, title, to }) => (
            <li key={id} className="px-4 cursor-pointer text-white capitalize py-6 text-4xl">
              {to ? (
                <ScrollLink to={to} smooth={true} duration={500} className="cursor-pointer" onClick={() => scrollTo(to)}>
                  {title}
                </ScrollLink>
              ) : (
                <Link href={href} onClick={() => setNav(false)}>
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
      <button className="flex gap-3 items-center justify-center bg-yellow-500 text-white px-4 py-2 rounded-md hover:scale-105 transition duration-300">
        <Icon iconNode={Phone} className="hidden md:block size-6 hover:text-gray-900 transition duration-300" />
        <div className="flex flex-col items-start text-sm">
        <span className=" ml-2">Contact Us</span>
        <span className="">08081045656</span>
        </div>
      </button>
    </div>
  </div>
  );
};

export default Nav;
