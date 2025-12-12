import React from 'react';
import * as FiIcons from 'react-icons/fi';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiTarget, FiBarChart2, FiUserCheck, FiCheckCircle } = FiIcons;

const WhyChooseSection = () => {
    const features = [
        {
            icon: FiHeart,
            title: "Real Clinic Owners",
            description: "We operate our own mental health clinics, so we understand your challenges firsthand—not from a textbook."
        },
        {
            icon: FiTarget,
            title: "Mental Health Specialists",
            description: "Exclusively focused on psychiatry and TMS therapy. We speak your language."
        },
        {
            icon: FiBarChart2,
            title: "Data-Driven Insights",
            description: "Advanced analytics and reporting give you complete visibility into your practice's financial health."
        },
        {
            icon: FiUserCheck,
            title: "Credentialing Experts",
            description: "Navigate complex payer relationships with our credentialing specialists who know every insurance panel inside-out."
        },
        {
            icon: FiCheckCircle,
            title: "Proven Track Record",
            description: "40+ years, 98% retention rate, and millions recovered for practices just like yours."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-[#6634A1] font-bold tracking-wider text-sm uppercase mb-2 block">Why Choose CBM</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Why Mental Health Practices Choose CBM
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Experience the difference that comes from working with billing experts who truly understand your practice
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center p-8 rounded-2xl hover:bg-purple-50 transition-colors duration-300 group"
                        >
                            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#6634A1] transition-colors duration-300">
                                <SafeIcon icon={feature.icon} className="w-8 h-8 text-[#6634A1] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center bg-gradient-to-r from-purple-50 to-purple-100 rounded-3xl p-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">The CBM Advantage</h3>
                    <div className="flex justify-center gap-16 mb-6">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#6634A1]">40+</div>
                            <div className="text-slate-600">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#6634A1]">98%</div>
                            <div className="text-slate-600">Retention Rate</div>
                        </div>
                    </div>
                    <blockquote className="text-lg italic text-slate-700 font-medium">
                        "The only billing company owned by mental health professionals, for mental health professionals."
                    </blockquote>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
