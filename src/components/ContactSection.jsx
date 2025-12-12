import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhoneCall, FiMail, FiMapPin, FiCheckCircle } = FiIcons;

const ContactSection = () => {
    return (
        <section id="contact-form" className="py-16 bg-slate-50 relative overflow-hidden">
            <div className="container max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                        Let's <span className="text-[#6634A1]">Transform</span> Your Practice
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Get your free revenue assessment and discover how much you could be earning
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Contact Info */}
                        <div className="bg-gradient-to-br from-[#6634A1] to-purple-700 p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-6">Get In Touch</h3>

                                <div className="space-y-4">
                                    <a href="tel:+12142955890" className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition-colors -ml-2">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <SafeIcon icon={FiPhoneCall} className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold">(214) 295-5890</div>
                                            <div className="text-purple-200 text-xs">Call for immediate assistance</div>
                                        </div>
                                    </a>

                                    <a href="mailto:info@cbmmedicalmanagement.com" className="flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition-colors -ml-2">
                                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                            <SafeIcon icon={FiMail} className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">info@cbmmedicalmanagement.com</div>
                                            <div className="text-purple-200 text-xs">Email us your questions</div>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                            <SafeIcon icon={FiMapPin} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <div className="font-semibold">Richardson, TX</div>
                                            <div className="text-purple-100 text-sm">Serving practices nationwide</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-6 bg-white/10 rounded-2xl border border-white/20">
                                    <h4 className="font-bold mb-4">Free Consultation Includes:</h4>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                            <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-300" />
                                            Revenue cycle analysis
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-300" />
                                            Billing optimization review
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <SafeIcon icon={FiCheckCircle} className="w-4 h-4 text-green-300" />
                                            Custom growth strategy
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Simple Contact Form */}
                        <div className="p-12">
                            <form className="space-y-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name*"
                                        className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:border-[#6634A1] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-slate-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address*"
                                        className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:border-[#6634A1] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-slate-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="tel"
                                        placeholder="Phone Number*"
                                        className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:border-[#6634A1] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-slate-50"
                                        required
                                    />
                                </div>
                                <div>
                                    <select className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:border-[#6634A1] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-slate-50">
                                        <option value="">Select Practice Type</option>
                                        <option value="psychiatry">Psychiatry</option>
                                        <option value="tms">TMS Therapy</option>
                                        <option value="psychology">Psychology</option>
                                        <option value="mental-health">Mental Health</option>
                                    </select>
                                </div>
                                <div>
                                    <textarea
                                        placeholder="Tell us about your biggest billing challenge..."
                                        rows="4"
                                        className="w-full px-4 py-4 border border-slate-200 rounded-xl focus:border-[#6634A1] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-slate-50 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#6634A1] text-white py-4 px-8 rounded-xl font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 transform hover:-translate-y-1"
                                >
                                    Schedule My Free Consultation
                                </button>

                                <p className="text-center text-xs text-slate-400">
                                    ⚡ No obligation • 15-min call • HIPAA Compliant
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
