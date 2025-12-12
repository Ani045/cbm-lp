import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiUsers, FiDollarSign, FiClock, FiCheckCircle, FiShield, FiZap, FiPhone } = FiIcons;

const AboutSection = () => {
    const scrollToHeroForm = () => {
        const heroFormName = document.getElementById('hero-form-name');
        if (heroFormName) {
            heroFormName.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => heroFormName.focus(), 500);
        }
    };

    return (
        <section id="about" className="py-16 bg-white relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                        Why <span className="text-[#6634A1]">CBM Medical Management</span> is Different
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        The only billing company that owns and operates mental health clinics
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Image - Left Side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://res.cloudinary.com/damfndmrm/image/upload/v1765535331/Gemini_Generated_Image_gf2qoqgf2qoqgf2q_ivebne.png"
                                alt="CBM Medical Management Team"
                                className="w-full h-[400px] object-cover"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#6634A1]/80 via-transparent to-transparent"></div>
                        </div>
                    </div>

                    {/* Content - Right Side */}
                    <div>
                        <div className="space-y-4">
                            {/* Key Points */}
                            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors group">
                                <div className="w-10 h-10 bg-[#6634A1] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-base font-semibold text-slate-900 mb-1">Real Practice Owners</div>
                                    <div className="text-sm text-slate-600">We understand your challenges because we face them too. Our team operates mental health clinics daily.</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors group">
                                <div className="w-10 h-10 bg-[#6634A1] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <SafeIcon icon={FiShield} className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-base font-semibold text-slate-900 mb-1">HIPAA Compliant</div>
                                    <div className="text-sm text-slate-600">100% secure and compliant billing processes with industry-leading data protection standards.</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors group">
                                <div className="w-10 h-10 bg-[#6634A1] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <SafeIcon icon={FiZap} className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-base font-semibold text-slate-900 mb-1">Fast Implementation</div>
                                    <div className="text-sm text-slate-600">Get started in days, not months. Seamless onboarding with minimal disruption to your practice.</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-purple-50 transition-colors group">
                                <div className="w-10 h-10 bg-[#6634A1] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-base font-semibold text-slate-900 mb-1">Proven Revenue Growth</div>
                                    <div className="text-sm text-slate-600">Average 35% revenue increase within the first year. 98% client retention rate.</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-6 flex items-center gap-4">
                            <button
                                onClick={scrollToHeroForm}
                                className="bg-[#6634A1] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20"
                            >
                                Get Free Consultation
                            </button>
                            <a href="tel:+12142955890" className="flex items-center gap-2 text-[#6634A1] font-bold text-lg hover:underline">
                                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                                (214) 295-5890
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

