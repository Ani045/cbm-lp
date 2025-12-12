import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiPhone } = FiIcons;

const FinalCTASection = () => {
    const scrollToHeroForm = () => {
        const heroFormName = document.getElementById('hero-form-name');
        if (heroFormName) {
            heroFormName.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => heroFormName.focus(), 500);
        }
    };

    return (
        <section className="py-12 bg-gradient-to-r from-[#6634A1] to-purple-700 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

            <div className="container max-w-5xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Ready to Transform Your Practice?
                        </h2>
                        <p className="text-purple-200">
                            Join 200+ mental health practices that trust CBM
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3">
                        <button
                            onClick={scrollToHeroForm}
                            className="bg-white text-[#6634A1] px-6 py-3 rounded-xl font-bold hover:bg-purple-100 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap"
                        >
                            Get Free Consultation
                            <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                        </button>
                        <a
                            href="tel:+12142955890"
                            className="text-white border-2 border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2 whitespace-nowrap"
                        >
                            <SafeIcon icon={FiPhone} className="w-4 h-4" />
                            (214) 295-5890
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTASection;
