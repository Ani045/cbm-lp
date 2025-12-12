import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiSearch, FiFileText, FiRocket } = FiIcons;

const ProcessSection = () => {
    const processSteps = [
        {
            number: "01",
            icon: FiCalendar,
            title: "Schedule Consultation",
            description: "Book a free 15-minute call to discuss your practice needs and challenges."
        },
        {
            number: "02",
            icon: FiSearch,
            title: "Comprehensive Audit",
            description: "We analyze your current billing processes to identify revenue opportunities."
        },
        {
            number: "03",
            icon: FiFileText,
            title: "Custom Action Plan",
            description: "Receive a tailored strategy with clear timeline and transparent pricing."
        },
        {
            number: "04",
            icon: FiRocket,
            title: "Launch & Grow",
            description: "Seamless onboarding with ongoing optimization and monthly performance reports."
        }
    ];

    return (
        <section id="process" className="py-16 bg-slate-50 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                        Your Path to <span className="text-[#6634A1]">Profitable Practice</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Our proven 4-step process to maximize your revenue
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {processSteps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 hover:border-[#6634A1]/30 hover:shadow-lg transition-all group relative"
                        >
                            {/* Connector Line (desktop only) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-[#6634A1]/20"></div>
                            )}

                            {/* Number Badge */}
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-[#6634A1] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                    {step.number}
                                </div>
                                <div className="w-9 h-9 bg-[#6634A1]/10 rounded-lg flex items-center justify-center group-hover:bg-[#6634A1] transition-colors">
                                    <SafeIcon icon={step.icon} className="w-4 h-4 text-[#6634A1] group-hover:text-white transition-colors" />
                                </div>
                            </div>

                            <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-12">
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-[#6634A1]">48h</div>
                        <div className="text-sm text-slate-600">Avg. Onboarding</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-[#6634A1]">30 Days</div>
                        <div className="text-sm text-slate-600">First Results</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold text-[#6634A1]">Zero</div>
                        <div className="text-sm text-slate-600">Upfront Cost</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
