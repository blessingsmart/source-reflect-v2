// resources/js/components/Nav.jsx
import { Link } from '@inertiajs/react';
import { Phone, Menu, X, Instagram, Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

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
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-green to-brand-green-deep text-white shadow-md">
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 11l9-8 9 8" />
                                <path d="M5 10v10h14V10" />
                                <path d="M9 20v-6h6v6" />
                            </svg>
                        </span>
                        <span className="font-serif text-2xl font-bold text-brand-ink">Setudown<span className="text-brand-gold">.</span></span>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="relative rounded-md px-3 py-2 text-sm font-medium text-brand-text/80 transition hover:text-brand-ink hover:bg-brand-cream-light"
                                >
                                    {link.label}
                                </Link>
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
                                    <Link
                                        href={link.href}
                                        className="block rounded-md px-4 py-3 text-base font-medium text-brand-text/80 transition hover:bg-brand-cream-light hover:text-brand-ink"
                                        onClick={closeMenu}
                                    >
                                        {link.label}
                                    </Link>
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
                                    href="https://www.tiktok.com/@setudown"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full bg-brand-cream-light p-2 text-brand-muted transition hover:bg-brand-cream hover:text-brand-green"
                                >   
                                    <svg role="img" size={20} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/setudown"
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