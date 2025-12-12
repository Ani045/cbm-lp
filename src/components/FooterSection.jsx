import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin } = FiIcons;

const FooterSection = () => {
    return (
        <footer className="bg-slate-950 text-white py-10">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <img
                            src="https://res.cloudinary.com/damfndmrm/image/upload/v1765543406/CBM-5_gjuxjw.png"
                            alt="CBM Medical Management"
                            className="h-12 w-auto"
                        />

                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <a
                            href="tel:+12142955890"
                            className="flex items-center gap-2 text-slate-300 hover:text-[#6634A1] transition-colors"
                        >
                            <SafeIcon icon={FiPhone} className="w-4 h-4" />
                            (214) 295-5890
                        </a>
                        <a
                            href="mailto:info@cbmmedicalmanagement.com"
                            className="flex items-center gap-2 text-slate-300 hover:text-[#6634A1] transition-colors"
                        >
                            <SafeIcon icon={FiMail} className="w-4 h-4" />
                            info@cbmmedicalmanagement.com
                        </a>
                        <div className="flex items-center gap-2 text-slate-400">
                            <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                            Richardson, TX
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2025 CBM Medical Management. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-[#6634A1] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#6634A1] transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-[#6634A1] transition-colors">HIPAA Compliance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
