import { Link } from '@inertiajs/react';
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-blue-950 py-10 text-gray-400">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
                {/* About */}
                <div>
                    <h3 className="text-lg font-bold text-white">Setudown Ltd</h3>
                    <p className="mt-2 text-sm">Helping individuals and organizations relocate with ease, anywhere in the world.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold text-white">Quick Links</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>
                            <Link href="/about" className="hover:text-white">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-white">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className="hover:text-white">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-white">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <a href="https://www.sourcereflect.com" className="hover:text-white">
                                SourceReflect
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-bold text-white">Connect</h3>
                    <div className="mt-2 flex space-x-4">
                        <a href="https://x.com/setudown1?s=21" className="hover:text-white">
                            <FaTwitter size={30} />
                        </a>
                        <a href="http://wa.me/2348165608778src=qr" className="hover:text-white">
                            <FaWhatsapp size={30} />
                        </a>
                        <a href="https://www.instagram.com/setudown?igsh=MXQ1NGN0N29kbml4MQ%3D%3D&utm_source=qr" className="hover:text-white">
                            <FaInstagram size={30} />
                        </a>
                        {/* <a href="https://www.facebook.com/sourcereflec?mibextid=LQQJ4d" className="hover:text-white">
                            <FaFacebook size={30} />
                        </a> */}
                    </div>
                </div>
            </div>
            <div className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Setudown Ltd. All rights reserved.</div>
        </footer>
    );
}
