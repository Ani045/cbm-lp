import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiDollarSign, FiCheckCircle, FiClock, FiZap, FiShield, FiHeart } = FiIcons;

const HeroSection = ({ isLoaded }) => {

    return (
        <section className="relative pt-16 mt-8 sm:mt-6 pb-8 overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 relative z-10">

                {/* Main Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-2">
                        <span className="text-[#6634A1]">Transform Your Practice Revenue</span><br />
                        with Expert Medical Billing
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        40+ years of revenue cycle excellence • 98% claim acceptance rate • 35% average revenue increase
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-5 gap-8 items-start">

                    {/* Growth Infographic - Left Side */}
                    <div className="lg:col-span-3">
                        <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] p-6">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Revenue Growth Visualization</h3>
                                <p className="text-sm text-slate-600">See how CBM transforms practice finances</p>
                            </div>

                            {/* Growth Chart Visualization */}
                            <div className="relative h-64 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 mb-6">
                                <div className="absolute top-4 left-4 text-sm font-semibold text-slate-700">Monthly Revenue ($)</div>

                                {/* Chart Bars */}
                                <div className="flex items-end justify-around h-48 pt-8">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 bg-red-400 rounded-t mb-2" style={{ height: '80px' }}></div>
                                        <span className="text-xs text-slate-600">Before CBM</span>
                                        <span className="text-xs font-semibold text-red-600">$45K</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 bg-yellow-400 rounded-t mb-2" style={{ height: '100px' }}></div>
                                        <span className="text-xs text-slate-600">Month 1-3</span>
                                        <span className="text-xs font-semibold text-yellow-600">$52K</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 bg-green-400 rounded-t mb-2" style={{ height: '140px' }}></div>
                                        <span className="text-xs text-slate-600">Month 4-6</span>
                                        <span className="text-xs font-semibold text-green-600">$67K</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 bg-[#6634A1] rounded-t mb-2" style={{ height: '160px' }}></div>
                                        <span className="text-xs text-slate-600">Month 7+</span>
                                        <span className="text-xs font-semibold text-[#6634A1]">$78K</span>
                                    </div>
                                </div>

                                {/* Growth Arrow */}
                                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                                    <div className="flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-full">
                                        <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-green-600" />
                                        <span className="text-sm font-bold text-green-600">+73%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
                                    <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-600 mx-auto mb-1" />
                                    <div className="text-lg font-bold text-green-600">+35%</div>
                                    <div className="text-xs text-slate-600">Revenue Increase</div>
                                </div>
                                <div className="text-center bg-gradient-to-br from-[#6634A1]/10 to-purple-100 rounded-lg p-3">
                                    <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-[#6634A1] mx-auto mb-1" />
                                    <div className="text-lg font-bold text-[#6634A1]">98%</div>
                                    <div className="text-xs text-slate-600">Claim Success</div>
                                </div>
                                <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
                                    <SafeIcon icon={FiClock} className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                                    <div className="text-lg font-bold text-blue-600">24h</div>
                                    <div className="text-xs text-slate-600">Processing</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-2">
                        <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/80 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] p-5">
                            <div className="text-center mb-4">
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Get Your FREE Assessment</h3>
                                <p className="text-sm text-slate-600">Discover your revenue potential</p>
                            </div>

                            <form className="space-y-3">
                                <input
                                    id="hero-form-name"
                                    type="text"
                                    placeholder="Full Name*"
                                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:border-[#6634A1] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white/80 text-sm"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address*"
                                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:border-[#6634A1] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white/80 text-sm"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number*"
                                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:border-[#6634A1] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white/80 text-sm"
                                    required
                                />
                                <select className="w-full px-3 py-2.5 border border-slate-200 rounded-lg focus:border-[#6634A1] focus:ring-2 focus:ring-purple-100 outline-none transition-all bg-white/80 text-sm">
                                    <option value="">Practice Type</option>
                                    <option value="psychiatry">Psychiatry</option>
                                    <option value="tms">TMS Therapy</option>
                                    <option value="psychology">Psychology</option>
                                    <option value="mental-health">Mental Health</option>
                                    <option value="other">Other</option>
                                </select>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-[#6634A1] to-purple-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg text-sm"
                                >
                                    Get My Revenue Assessment
                                </button>

                                <div className="text-center text-xs text-slate-500 mt-2">
                                    <SafeIcon icon={FiZap} className="text-[#6634A1] w-3 h-3 inline mr-1" />
                                    Free 15-min consultation
                                </div>
                            </form>

                            <div className="mt-4 grid grid-cols-2 gap-2">
                                <div className="flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2">
                                    <SafeIcon icon={FiShield} className="w-4 h-4 text-green-600" />
                                    <span className="text-xs font-semibold text-slate-900">HIPAA Secure</span>
                                </div>
                                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-2">
                                    <SafeIcon icon={FiHeart} className="w-4 h-4 text-blue-600" />
                                    <span className="text-xs font-semibold text-slate-900">Practice Owners</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
