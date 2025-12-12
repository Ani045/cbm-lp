import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiPhone } = FiIcons;

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What makes CBM different from other billing companies?",
            answer: "We own and operate our own mental health clinics, giving us real-world insights no other billing company can match."
        },
        {
            question: "How quickly will I see results?",
            answer: "Most practices see improvements within 30-60 days, with 35% revenue increase in the first year."
        },
        {
            question: "What types of practices do you work with?",
            answer: "We specialize exclusively in mental health practices: psychiatry, TMS therapy, psychology, and behavioral health."
        },
        {
            question: "How does your pricing work?",
            answer: "Our pricing is based on a percentage of collections - we only succeed when you succeed."
        },
        {
            question: "Do you handle credentialing and payer enrollment?",
            answer: "Yes, we provide full credentialing services including provider enrollment and CAQH management."
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
        <section id="faq" className="py-12 bg-white">
            <div className="container max-w-5xl mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* FAQ List */}
                    <div className="lg:col-span-3">
                        <div className="mb-6">
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                                Frequently Asked <span className="text-[#6634A1]">Questions</span>
                            </h2>
                            <p className="text-slate-600 text-sm">Everything you need to know about partnering with CBM</p>
                        </div>

                        <div className="space-y-3">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-purple-50 transition-colors"
                                    >
                                        <span className="text-sm font-semibold text-slate-900 pr-4">{faq.question}</span>
                                        <SafeIcon
                                            icon={FiChevronDown}
                                            className={`w-4 h-4 text-[#6634A1] transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-[#6634A1] to-purple-700 rounded-2xl p-6 text-white sticky top-24">
                            <h3 className="text-xl font-bold mb-2">Still Have Questions?</h3>
                            <p className="text-purple-200 text-sm mb-6">Get in touch with our team for personalized answers</p>

                            <div className="space-y-3">
                                <a
                                    href="tel:+12142955890"
                                    className="flex items-center gap-3 bg-white/20 rounded-xl p-4 hover:bg-white/30 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                        <SafeIcon icon={FiPhone} className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold">(214) 295-5890</div>
                                        <div className="text-purple-200 text-xs">Call us directly</div>
                                    </div>
                                </a>

                                <button
                                    onClick={scrollToHeroForm}
                                    className="w-full bg-white text-[#6634A1] py-3 px-4 rounded-xl font-bold hover:bg-purple-100 transition-all"
                                >
                                    Get Free Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
