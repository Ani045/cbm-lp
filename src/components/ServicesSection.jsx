import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight } = FiIcons;

const ServicesSection = () => {
    const services = [
        {
            title: "Revenue Cycle Management",
            image: "https://res.cloudinary.com/damfndmrm/image/upload/v1765538265/Gemini_Generated_Image_4exhkk4exhkk4exh_lm8xs1.png",
            desc: "Full A/R management, claims submission & follow-up, denial management, and payment posting.",
            features: ["Claims Submission", "Denial Management", "Payment Posting"]
        },
        {
            title: "Virtual Medical Assistants",
            image: "https://res.cloudinary.com/damfndmrm/image/upload/v1765537721/Gemini_Generated_Image_hnzi8yhnzi8yhnzi_wa38sd.png",
            desc: "Front desk support, patient scheduling, insurance verification, and phone support.",
            features: ["Patient Scheduling", "Insurance Verification", "Phone Support"]
        },
        {
            title: "TMS Optimization",
            image: "https://res.cloudinary.com/damfndmrm/image/upload/v1765537725/Gemini_Generated_Image_qzz5f5qzz5f5qzz5_dq9kzt.png",
            desc: "Specialized billing protocols, prior authorization experts, and compliance guidance.",
            features: ["Prior Auth", "Billing Protocols", "Compliance"]
        }
    ];

    const scrollToHeroForm = () => {
        const heroFormName = document.getElementById('hero-form-name');
        if (heroFormName) {
            heroFormName.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => heroFormName.focus(), 500);
        }
    };

    return (
        <section id="services" className="py-16 bg-white">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                        <span className="text-[#6634A1]">Maximize Revenue</span> While You Focus on Patients
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Three essential services that transform mental health practices
                    </p>
                </div>

                {/* Services Grid - 1 column on mobile, 3 on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#6634A1]/40 hover:shadow-lg transition-all group shadow-sm"
                        >
                            {/* Image */}
                            <div className="overflow-hidden bg-white">
                                <img
                                    src={s.image}
                                    alt={s.title}
                                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 bg-white">
                                <h3 className="text-base font-bold text-black mb-2">{s.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed mb-3">{s.desc}</p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-1">
                                    {s.features.map((feature, idx) => (
                                        <span key={idx} className="text-[10px] bg-[#6634A1]/10 text-[#6634A1] px-2 py-0.5 rounded-full font-medium">
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-to-r from-[#6634A1] to-purple-700 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold mb-1">Ready to Transform Your Practice?</h3>
                            <p className="text-purple-200 text-sm">Join 200+ practices that trust CBM</p>
                        </div>
                        <button
                            onClick={scrollToHeroForm}
                            className="bg-white text-[#6634A1] px-6 py-3 rounded-xl font-bold hover:bg-purple-100 transition-all shadow-lg whitespace-nowrap flex items-center gap-2"
                        >
                            Get Started
                            <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
