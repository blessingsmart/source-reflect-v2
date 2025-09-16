import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Twitter, Linkedin, Phone } from 'lucide-react';
import { Icon } from "./icon";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollTo = (to) => {
    setNav(false);
    scroll.scrollTo(to);
  };

  const links = [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/about", title: "About Us" },
    { id: 4, href: "/services", title: "Services" },
    { id: 5, href: "/blog", title: "Blog" }, 
    { id: 6, href: "/Contact", title: "Contact" }, 
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="flex gap-3 items-center px-4 sm:px-10 h-10 bg-blue-950 text-gray-300 transition-all duration-300">
        <div className="flex items-center gap-4">
          <a href="#" className="transition-colors duration-300 hover:text-white">
            <Icon iconNode={Twitter} className="size-4" />
          </a>
          <a href="#" className="transition-colors duration-300 hover:text-white">
            <Icon iconNode={Linkedin} className="size-4" />
          </a>
        </div>
        <h2 className="text-xs ml-2 md:text-sm">Welcome to Setudown</h2>
      </div>

      {/* Main navigation */}
      <div className={`flex justify-between items-center w-full h-20 px-4 sm:px-10 bg-white transition-all duration-500 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img src={logo} alt="mainlogo" className="w-full h-10 mr-2 transition-transform duration-300 group-hover:scale-105" />
          {/* <h1 className="text-lg md:text-xl font-semibold text-blue-950 transition-colors duration-300 group-hover:text-blue-800">SETUDOWN LTD</h1> */}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {links.map(({ id, href, title, to }) => (
            <li key={id} className="relative">
              {to ? (
                <ScrollLink 
                  to={to} 
                  smooth={true} 
                  duration={500} 
                  className="px-4 py-2 cursor-pointer font-medium text-gray-700 hover:text-blue-800 transition-colors duration-300 relative group"
                >
                  {title}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10"></span>
                </ScrollLink>
              ) : (
                <Link 
                  href={href} 
                  className="px-4 py-2 cursor-pointer font-medium text-gray-700 hover:text-blue-800 transition-colors duration-300 relative group"
                >
                  {title}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-4/5 group-hover:left-1/10"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Contact button */}
        <button className="hidden md:flex gap-2 items-center justify-center bg-green-500 text-white px-4 py-2.5 rounded-md hover:bg-blue-700 transition-all duration-300 group">
          <Icon iconNode={Phone} className="size-5 transition-transform duration-300 group-hover:scale-110" />
          <div className="flex flex-col items-start text-sm">
            <span className="font-medium">Contact Us</span>
            <span className="text-xs">+234 816 560 8778</span>
          </div>
        </button>

        {/* Mobile Menu Toggle */}
        <div 
          onClick={() => setNav(!nav)} 
          className="cursor-pointer p-2 z-10 text-blue-950 md:hidden rounded-md hover:bg-gray-100 transition-colors duration-300"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-500 ${nav ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-500 ${nav ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setNav(false)}
        ></div>
        
        {/* Menu panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-xl transform transition-transform duration-500 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full">
            {/* Menu header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-blue-950">Menu</h2>
              <button 
                onClick={() => setNav(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                <FaTimes size={20} className="text-blue-950" />
              </button>
            </div>
            
            {/* Menu items */}
            <nav className="flex-1 p-6 overflow-y-auto">
              <ul className="space-y-4">
                {links.map(({ id, href, title, to }) => (
                  <li key={id}>
                    {to ? (
                      <ScrollLink 
                        to={to} 
                        smooth={true} 
                        duration={500} 
                        className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-all duration-300"
                        onClick={() => scrollTo(to)}
                      >
                        {title}
                      </ScrollLink>
                    ) : (
                      <Link 
                        href={href} 
                        className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-all duration-300"
                        onClick={() => setNav(false)}
                      >
                        {title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Mobile contact section */}
            <div className="p-6 border-t">
              <div className="flex items-center gap-3 mb-4">
                <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-300">
                  <Icon iconNode={Twitter} className="size-5 text-blue-950" />
                </a>
                <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors duration-300">
                  <Icon iconNode={Linkedin} className="size-5 text-blue-950" />
                </a>
              </div>
              <button className="w-full flex gap-3 items-center justify-center bg-blue-800 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-all duration-300">
                <Icon iconNode={Phone} className="size-5" />
                <div className="flex flex-col items-start text-sm">
                  <span className="font-medium">Contact Us</span>
                  <span className="text-xs">+234 816 560 8778</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;