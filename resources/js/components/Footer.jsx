import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const Footer = () => {
    const links = [
        { id: 1, href: "/", title: "Home" },
        { id: 2, to: "Testimonials", title: "Testimonials" },
        { id: 3, href: "/about", title: "About Us" },
        { id: 4, to: "Shop", title: "Shop" },
        { id: 5, href: "/partner-with-us", title: "Partner With Us" },
    ];

    const socialLinks = [
        { id: 1, icon: <FaTwitter size={30} />, href: "https://www.twitter.com/sourcereflect1" },
        { id: 2, icon: <FaWhatsapp size={30} />, href: "https://wa.me/message/YL3HPLETTPM5O1?src=qr" },
        { id: 3, icon: <FaInstagram size={30} />, href: "https://instagram.com/sourcereflect?igshid=MmIzYWVlNDQ5Yg==" },
        { id: 4, icon: <FaFacebook size={30} />, href: "https://www.facebook.com/sourcereflec?mibextid=LQQJ4d" },
    ];

    return (
        <footer className="bg-gradient-to-r from-green-600 to-lime-600  text-white p-10 w-screen">
            <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between items-center text-center sm:text-left">
                {/* Contact Section */}
                <div className="flex flex-col items-center sm:items-start gap-2">
                    <h1 className="text-lg md:text-3xl text-blue-300 pb-5">CONTACT US</h1>
                    <p><span className="font-medium">Email:</span> source@sourcereflect.com</p>
                    <p><span className="font-medium">Phone:</span> +234 708 451 9109</p>
                    <p>+234 816 670 6620</p>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-col items-center text-center pt-10 sm:pt-0">
                    {links.map(({ id, href, title, to }) => (
                        <li key={id} className="cursor-pointer capitalize font-medium hover:scale-105 duration-200">
                            {to ? (
                                <ScrollLink to={to} smooth={true} duration={500} className="cursor-pointer">
                                    {title}
                                </ScrollLink>
                            ) : (
                                <Link href={href}>{title}</Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Social Media Links */}
                <div className="flex flex-col items-center mt-10 sm:mt-0">
                    <h1 className="text-lg md:text-3xl text-blue-300">Get In Touch</h1>
                    <ul className="flex gap-4 pt-5">
                        {socialLinks.map(({ id, icon, href }) => (
                            <li key={id} className="hover:scale-105 transition-transform duration-200">
                                <a href={href} target="_blank" rel="noopener noreferrer">
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Copyright */}
            <div className="text-center text-sm pt-5">
            Copyright © {new Date().getFullYear()}. Made with 💚 by
                <a href="https://blessing-eno.netlify.app/" target="_blank" rel="noopener noreferrer" className="pl-1 underline">
                    Blessing
                </a>
            </div>
        </footer>
    );
};

export default Footer;
