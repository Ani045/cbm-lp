import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX } = FiIcons;

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
            <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img
                        src="https://res.cloudinary.com/damfndmrm/image/upload/v1765535319/CBM-4_eivme3.png"
                        alt="CBM Medical Management Logo"
                        className="h-10 w-auto"
                    />

                </div>

                <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-600">

                    <div className="flex items-center gap-4">
                        <span className="text-[#6634A1] font-semibold">(214) 295-5890</span>
                        <button className="bg-[#6634A1] text-white px-5 py-2.5 rounded-full hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/20">
                            Free Consultation
                        </button>
                    </div>
                </div>

                <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <SafeIcon icon={mobileMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
