'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-navy-blue">
                        NM Constructions & Landscaping
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-navy-blue"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className={`nav-link ${pathname === '/' ? 'text-navy-blue border-b-2 border-navy-blue' : ''}`}>
                            Home
                        </Link>
                        <Link href="/about" className={`nav-link ${pathname === '/about' ? 'text-navy-blue border-b-2 border-navy-blue' : ''}`}>
                            About Us
                        </Link>
                        <Link href="/services" className={`nav-link ${pathname === '/services' ? 'text-navy-blue border-b-2 border-navy-blue' : ''}`}>
                            Services
                        </Link>
                        <Link href="/projects" className={`nav-link ${pathname === '/projects' ? 'text-navy-blue border-b-2 border-navy-blue' : ''}`}>
                            Projects
                        </Link>
                        <Link href="/why-choose-us" className={`nav-link ${pathname === '/why-choose-us' ? 'text-navy-blue border-b-2 border-navy-blue' : ''}`}>
                            Why Choose Us
                        </Link>
                        <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'text-navy-blue border-b-2 border-navy-blue' : ''}`}>
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            <Link href="/" className={`nav-link ${pathname === '/' ? 'text-navy-blue border-b-2 border-navy-blue pb-2' : ''}`} onClick={() => setIsMenuOpen(false)}>
                                Home
                            </Link>
                            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'text-navy-blue border-b-2 border-navy-blue pb-2' : ''}`} onClick={() => setIsMenuOpen(false)}>
                                About Us
                            </Link>
                            <Link href="/services" className={`nav-link ${pathname === '/services' ? 'text-navy-blue border-b-2 border-navy-blue pb-2' : ''}`} onClick={() => setIsMenuOpen(false)}>
                                Services
                            </Link>
                            <Link href="/projects" className={`nav-link ${pathname === '/projects' ? 'text-navy-blue border-b-2 border-navy-blue pb-2' : ''}`} onClick={() => setIsMenuOpen(false)}>
                                Projects
                            </Link>
                            <Link href="/why-choose-us" className={`nav-link ${pathname === '/why-choose-us' ? 'text-navy-blue border-b-2 border-navy-blue pb-2' : ''}`} onClick={() => setIsMenuOpen(false)}>
                                Why Choose Us
                            </Link>
                            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'text-navy-blue border-b-2 border-navy-blue pb-2' : ''}`} onClick={() => setIsMenuOpen(false)}>
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
