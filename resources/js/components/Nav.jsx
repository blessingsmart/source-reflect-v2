// resources/js/components/Nav.jsx
import { Link } from '@inertiajs/react';
import { Phone, Menu, X, Instagram, Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';

function TikTokIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-[18px] w-[18px]"
            {...props}
        >
            <path d="M14.6 3a5.4 5.4 0 0 0 3.9 1.4V7a4.5 4.5 0 0 1-3.3-1.2v7.1a4.6 4.6 0 1 1-4.6-4.6c.3 0 .6 0 .9.1v2.6a2.1 2.1 0 1 0 1.6 2.1V3h1.4Z" />
        </svg>
    );
}

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Moving Abroad', href: '/moving-abroad' },
        { label: 'To Nigeria', href: '/moving-to-nigeria' },
        { label: 'Within Nigeria', href: '/moving-within-nigeria' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
    ];

    const closeMenu = () => setNavOpen(false);

    return (
        <header className="sticky top-0 z-50">
            {/* Announcement bar */}
            <div className="hidden bg-brand-ink px-4 py-2 text-center text-xs text-white/80 sm:block">
                <span>
                    Now serving relocations in <strong className="text-brand-gold-bright">every direction</strong> — moving abroad, moving to Nigeria &amp; moving across it.{' '}
                    <a
                        href="https://wa.me/2348165608778"
                        className="ml-2 inline-block rounded-full border border-white/20 px-3 py-0.5 text-[11px] font-medium text-brand-gold-bright transition hover:bg-white/10"
                    >
                        Chat on WhatsApp →
                    </a>
                </span>
            </div>

            {/* Main Nav */}
            <nav
                className={`transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/90 shadow-lg backdrop-blur-md'
                        : 'bg-white/80 backdrop-blur-sm'
                } border-b border-white/20`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <span className="flex items-center justify-center rounded-lg  text-white shadow-md">
                            <img
                                src={logo}
                                alt="mainlogo"
                                className="mr-2 h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-10 md:h-12 lg:h-14"
                            />
                        </span>
                        {/* <span className="font-serif text-2xl font-bold text-brand-ink">Setudown<span className="text-brand-gold">.</span></span> */}
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                {link.href === '/blog' ? (
                                    <a
                                        href={link.href}
                                        className="relative rounded-md px-3 py-2 text-sm font-medium text-brand-text/80 transition hover:text-brand-ink hover:bg-brand-cream-light"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="relative rounded-md px-3 py-2 text-sm font-medium text-brand-text/80 transition hover:text-brand-ink hover:bg-brand-cream-light"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="hidden items-center gap-3 md:flex">
                        <a
                            href="tel:+2348165608778"
                            className="flex items-center gap-2 rounded-full border border-brand-green/30 px-4 py-2 text-sm font-medium text-brand-green-deep transition hover:bg-brand-green hover:text-white hover:border-brand-green"
                        >
                            <Phone size={16} />
                            <span>+234 816 560 8778</span>
                        </a>
                        <Link
                            href="/contact"
                            className="rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-5 py-2 text-sm font-semibold text-brand-ink transition hover:shadow-lg hover:shadow-brand-gold/30"
                        >
                            Book Free Call
                        </Link>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setNavOpen(!navOpen)}
                        className="rounded-md p-2 text-brand-ink transition hover:bg-brand-cream-light md:hidden"
                        aria-label="Toggle menu"
                    >
                        {navOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
                    navOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    onClick={closeMenu}
                />

                {/* Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-80 max-w-full transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
                        navOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex h-full flex-col">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-brand-cream-light p-4">
                            <span className="font-serif text-xl font-bold text-brand-ink">Menu</span>
                            <button
                                onClick={closeMenu}
                                className="rounded-md p-2 text-brand-ink transition hover:bg-brand-cream-light"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Links */}
                        <ul className="flex-1 overflow-y-auto p-4 space-y-1">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    {link.href === '/blog' ? (
                                        <a
                                            href={link.href}
                                            className="block rounded-md px-4 py-3 text-base font-medium text-brand-text/80 transition hover:bg-brand-cream-light hover:text-brand-ink"
                                            onClick={closeMenu}
                                        >
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="block rounded-md px-4 py-3 text-base font-medium text-brand-text/80 transition hover:bg-brand-cream-light hover:text-brand-ink"
                                            onClick={closeMenu}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Bottom – Contact & Socials */}
                        <div className="border-t border-brand-cream-light p-4">
                            <div className="flex items-center gap-3 mb-4">
                                <a
                                    href="https://www.instagram.com/setudown"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-brand-cream-light p-2 text-brand-muted transition hover:bg-brand-cream hover:text-brand-green"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://www.tiktok.com/@setu_down"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-brand-cream-light p-2 text-brand-muted transition hover:bg-brand-cream hover:text-brand-green"
                                >   
                                    <TikTokIcon />
                                </a>
                                <a
                                    href=" https://www.linkedin.com/in/popoolasamson/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-brand-cream-light p-2 text-brand-muted transition hover:bg-brand-cream hover:text-brand-green"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="https://www.facebook.com/share/1DCADDViy3/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-brand-cream-light p-2 text-brand-muted transition hover:bg-brand-cream hover:text-brand-green"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a
                                    href="https://wa.me/2348165608778"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-brand-cream-light p-2 text-brand-muted transition hover:bg-brand-cream hover:text-brand-green"
                                >
                                    <MessageCircle size={20} />
                                </a>
                            </div>
                            <Link
                                href="/contact"
                                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-gold-bright to-brand-gold px-4 py-3 font-semibold text-brand-ink transition hover:shadow-lg hover:shadow-brand-gold/30"
                                onClick={closeMenu}
                            >
                                Book Free Discovery Call
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;