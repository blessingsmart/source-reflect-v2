// resources/js/components/Footer.jsx
import { Link } from '@inertiajs/react';
import {
    Instagram,
    Twitter,
    Facebook,
    Linkedin,
    MessageCircle,
    // TikTok,
    Mail,
    Phone,
    MapPin,
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-ink text-white/70">
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
                <div className="grid gap-10 md:grid-cols-4">
                    {/* Brand & About */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2">
                            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-green to-brand-green-deep text-white shadow-md">
                                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 11l9-8 9 8" />
                                    <path d="M5 10v10h14V10" />
                                    <path d="M9 20v-6h6v6" />
                                </svg>
                            </span>
                            <span className="font-serif text-2xl font-bold text-white">Setudown<span className="text-brand-gold">.</span></span>
                        </div>
                        <p className="mt-4 text-sm leading-relaxed">
                            Helping individuals, families and organisations relocate with ease — abroad, to Nigeria, or across it. Settle down without the stress.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex gap-3">
                            <a
                                href="https://www.instagram.com/setudown"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-brand-gold hover:bg-brand-gold/20 hover:text-brand-gold"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </a>
                            {/* <a
                                href="https://www.tiktok.com/@setudown"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-brand-gold hover:bg-brand-gold/20 hover:text-brand-gold"
                                aria-label="TikTok"
                            >
                                <TikTok size={18} />
                            </a> */}
                            <a
                                href="https://www.linkedin.com/company/setudown"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-brand-gold hover:bg-brand-gold/20 hover:text-brand-gold"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a
                                href="https://www.facebook.com/setudown"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-brand-gold hover:bg-brand-gold/20 hover:text-brand-gold"
                                aria-label="Facebook"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://x.com/setudown"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-brand-gold hover:bg-brand-gold/20 hover:text-brand-gold"
                                aria-label="X (Twitter)"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="https://wa.me/2348165608778"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition hover:border-brand-gold hover:bg-brand-gold/20 hover:text-brand-gold"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Directions */}
                    <div>
                        <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Directions</h5>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/moving-abroad" className="transition hover:text-brand-gold-bright">
                                    Moving Abroad (Japa)
                                </Link>
                            </li>
                            <li>
                                <Link href="/moving-to-nigeria" className="transition hover:text-brand-gold-bright">
                                    Moving to Nigeria
                                </Link>
                            </li>
                            <li>
                                <Link href="/moving-within-nigeria" className="transition hover:text-brand-gold-bright">
                                    Moving within Nigeria
                                </Link>
                            </li>
                            <li>
                                <Link href="/corporate" className="transition hover:text-brand-gold-bright">
                                    Corporate &amp; Teams
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h5>
                        <ul className="space-y-2.5 text-sm">
                            <li>
                                <Link href="/about" className="transition hover:text-brand-gold-bright">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/packages" className="transition hover:text-brand-gold-bright">
                                    Packages
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="transition hover:text-brand-gold-bright">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="transition hover:text-brand-gold-bright">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h5>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="mt-0.5 shrink-0 text-brand-gold" />
                                <a href="mailto:inquiries@setudown.com" className="transition hover:text-brand-gold-bright">
                                    inquiries@setudown.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="mt-0.5 shrink-0 text-brand-gold" />
                                <a href="tel:+2348165608778" className="transition hover:text-brand-gold-bright">
                                    +234 816 560 8778
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-gold" />
                                <span>Based in Lagos · Serving globally</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
                    <p>© {new Date().getFullYear()} Setudown Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-[11px]">RC: 0000000</span>
                        <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-[11px]">Verified vendors</span>
                        <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-[11px]">Digital-first</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}