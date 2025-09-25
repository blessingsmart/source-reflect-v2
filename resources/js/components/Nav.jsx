import { Link } from '@inertiajs/react';
import { Linkedin, Phone, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logo.png';
import { Icon } from './icon';

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
        { id: 1, href: '/', title: 'Home' },
        { id: 2, href: '/about', title: 'About Us' },
        { id: 4, href: '/services', title: 'Services' },
        { id: 5, href: '/', title: 'Blog' },
        { id: 6, href: '/contact', title: 'Contact' },
    ];

    return (
        <div className="top-0 right-0 left-0">
            {/* Top info bar */}
            <div className="flex h-10 items-center gap-3 bg-blue-950 px-4 text-gray-300 transition-all duration-300 sm:px-10">
                <div className="flex items-center gap-4">
                    <a href="https://x.com/setudown1?s=21" className="transition-colors duration-300 hover:text-white">
                        <Icon iconNode={Twitter} className="size-4" />
                    </a>
                    {/* <a href="#" className="transition-colors duration-300 hover:text-white">
                        <Icon iconNode={Linkedin} className="size-4" />
                    </a> */}
                </div>
                <h2 className="ml-2 text-xs md:text-sm">Welcome to Setudown</h2>
            </div>

            {/* Main navigation */}
            <div
                className={`flex h-20 w-full items-center justify-between bg-white px-4 transition-all duration-500 sm:px-10 ${scrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'}`}
            >
                {/* Logo */}
                <Link href="/" className="group flex items-center">
                    <img
                        src={logo}
                        alt="mainlogo"
                        className="mr-2 h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10 md:h-12 lg:h-14"
                    />
                    {/* <h1 className="text-lg md:text-xl font-semibold text-blue-950 transition-colors duration-300 group-hover:text-blue-800">SETUDOWN LTD</h1> */}
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden items-center space-x-1 md:flex">
                    {links.map(({ id, href, title, to }) => (
                        <li key={id} className="relative">
                            {to ? (
                                <ScrollLink
                                    to={to}
                                    smooth={true}
                                    duration={500}
                                    className="group relative cursor-pointer px-4 py-2 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-800"
                                >
                                    {title}
                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:left-1/10 group-hover:w-4/5"></span>
                                </ScrollLink>
                            ) : (
                                <Link
                                    href={href}
                                    className="group relative cursor-pointer px-4 py-2 font-medium text-gray-700 transition-colors duration-300 hover:text-blue-800"
                                >
                                    {title}
                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-blue-800 transition-all duration-300 group-hover:left-1/10 group-hover:w-4/5"></span>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Contact button */}
                <button className="group hidden items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-2.5 text-white transition-all duration-300 hover:bg-blue-700 md:flex">
                    <Icon iconNode={Phone} className="size-5 transition-transform duration-300 group-hover:scale-110" />
                    <div className="flex flex-col items-start text-sm">
                        <span className="font-medium">Contact Us</span>
                        <span className="text-xs">+234 816 560 8778</span>
                    </div>
                </button>

                {/* Mobile Menu Toggle */}
                <div
                    onClick={() => setNav(!nav)}
                    className="z-10 cursor-pointer rounded-md p-2 text-blue-950 transition-colors duration-300 hover:bg-gray-100 md:hidden"
                >
                    {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 transition-opacity duration-500 md:hidden ${nav ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 ${nav ? 'opacity-50' : 'opacity-0'}`}
                    onClick={() => setNav(false)}
                ></div>

                {/* Menu panel */}
                <div
                    className={`absolute top-0 right-0 h-full w-80 max-w-full transform bg-white shadow-xl transition-transform duration-500 ease-in-out ${nav ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex h-full flex-col">
                        {/* Menu header */}
                        <div className="flex items-center justify-between border-b p-6">
                            <h2 className="text-xl font-semibold text-blue-950">Menu</h2>
                            <button onClick={() => setNav(false)} className="rounded-full p-2 transition-colors duration-300 hover:bg-gray-100">
                                <FaTimes size={20} className="text-blue-950" />
                            </button>
                        </div>

                        {/* Menu items */}
                        <nav className="flex-1 overflow-y-auto p-6">
                            <ul className="space-y-4">
                                {links.map(({ id, href, title, to }) => (
                                    <li key={id}>
                                        {to ? (
                                            <ScrollLink
                                                to={to}
                                                smooth={true}
                                                duration={500}
                                                className="block rounded-md px-4 py-3 text-lg font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-800"
                                                onClick={() => scrollTo(to)}
                                            >
                                                {title}
                                            </ScrollLink>
                                        ) : (
                                            <Link
                                                href={href}
                                                className="block rounded-md px-4 py-3 text-lg font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-800"
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
                        <div className="border-t p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <a href="#" className="rounded-full bg-gray-100 p-2 transition-colors duration-300 hover:bg-blue-100">
                                    <Icon iconNode={Twitter} className="size-5 text-blue-950" />
                                </a>
                                <a href="#" className="rounded-full bg-gray-100 p-2 transition-colors duration-300 hover:bg-blue-100">
                                    <Icon iconNode={Linkedin} className="size-5 text-blue-950" />
                                </a>
                            </div>
                            <button className="flex w-full items-center justify-center gap-3 rounded-md bg-blue-800 px-4 py-3 text-white transition-all duration-300 hover:bg-blue-700">
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
