import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone } = FiIcons;

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToHeroForm = () => {
        const heroFormName = document.getElementById('hero-form-name');
        if (heroFormName) {
            heroFormName.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => heroFormName.focus(), 500);
        }
    };

    return (
        <>
            <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-4'}`}>
                <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://res.cloudinary.com/damfndmrm/image/upload/v1765535319/CBM-4_eivme3.png"
                            alt="CBM Medical Management Logo"
                            className="h-10 w-auto"
                        />
                    </div>

                    <div className="hidden md:flex items-center gap-4 font-medium text-sm">
                        <a href="tel:+12142955890" className="flex items-center gap-2 text-[#6634A1] font-semibold hover:underline">
                            <SafeIcon icon={FiPhone} className="w-4 h-4" />
                            (214) 295-5890
                        </a>
                        <button
                            onClick={scrollToHeroForm}
                            className="bg-[#6634A1] text-white px-5 py-2.5 rounded-full hover:bg-purple-700 transition-all shadow-lg shadow-purple-900/20"
                        >
                            Get Consultation
                        </button>
                    </div>
                </div>
            </nav>

            {/* Fixed Bottom Bar for Mobile */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.1)] px-4 py-2">
                <div className="flex items-center gap-2">
                    <a
                        href="tel:+12142955890"
                        className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 text-[#6634A1] py-2.5 px-3 rounded-lg font-semibold text-sm"
                    >
                        <SafeIcon icon={FiPhone} className="w-4 h-4" />
                        Call Now
                    </a>
                    <button
                        onClick={scrollToHeroForm}
                        className="flex-1 bg-[#6634A1] text-white py-2.5 px-3 rounded-lg font-semibold text-sm shadow-md"
                    >
                        Get Consultation
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;

