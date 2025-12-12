import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiXCircle, FiClock, FiUserMinus, FiAlertTriangle } = FiIcons;

const PainPointsSection = () => {
    const painPoints = [
        {
            title: "Claim Denials",
            stat: "25%",
            desc: "Average revenue lost due to coding errors and incomplete documentation",
            icon: FiXCircle
        },
        {
            title: "Admin Overload",
            stat: "15hrs",
            desc: "Weekly staff time spent on billing paperwork instead of patient care",
            icon: FiClock
        },
        {
            title: "Missed Follow-ups",
            stat: "18%",
            desc: "Patient leakage from delayed scheduling and poor communication",
            icon: FiUserMinus
        },
        {
            title: "Compliance Risk",
            stat: "$50K+",
            desc: "Potential audit penalties from billing errors and verification issues",
            icon: FiAlertTriangle
        }
    ];

    return (
        <section className="py-16 bg-slate-50 relative">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                        Where is Your <span className="text-[#6634A1]">Revenue</span> Going?
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Most practices lose <span className="text-[#6634A1] font-semibold">20-30%</span> of potential income to these silent killers
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {painPoints.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#6634A1]/20 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-[#6634A1]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#6634A1] transition-colors duration-300">
                                <SafeIcon icon={item.icon} className="w-6 h-6 text-[#6634A1] group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <div className="text-3xl font-bold text-[#6634A1] mb-2">{item.stat}</div>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Solution teaser */}
                <div className="mt-10 text-center">
                    <p className="text-slate-600 mb-4">
                        <span className="font-semibold text-slate-900">CBM eliminates these problems</span> with proven systems that recover lost revenue
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#6634A1] font-semibold">
                        <span>See how we transform practices</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPointsSection;
