import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTrendingUp, FiArrowRight, FiDollarSign, FiClock, FiCheckCircle, FiUsers } = FiIcons;

const StatsSection = () => {
    return (
        <section className="py-16 bg-gradient-to-br from-[#6634A1] to-purple-800 text-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                        From Revenue Leaks to <span className="text-purple-200">Profit Streams</span>
                    </h2>
                    <p className="text-purple-200 max-w-2xl mx-auto text-lg">
                        See how CBM transforms billing chaos into predictable revenue growth
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-12 gap-6">

                    {/* Growth Infographic - 5 columns */}
                    <div className="lg:col-span-5 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-green-300" />
                            Revenue Growth Timeline
                        </h3>

                        {/* Growth Bars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-16 text-xs text-purple-200">Before</div>
                                <div className="flex-1 h-8 bg-white/10 rounded-lg overflow-hidden relative">
                                    <div className="h-full bg-red-400/60 rounded-lg" style={{ width: '45%' }}></div>
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold">$45K</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-16 text-xs text-purple-200">Month 3</div>
                                <div className="flex-1 h-8 bg-white/10 rounded-lg overflow-hidden relative">
                                    <div className="h-full bg-yellow-400/60 rounded-lg" style={{ width: '60%' }}></div>
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold">$58K</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-16 text-xs text-purple-200">Month 6</div>
                                <div className="flex-1 h-8 bg-white/10 rounded-lg overflow-hidden relative">
                                    <div className="h-full bg-green-400/60 rounded-lg" style={{ width: '78%' }}></div>
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold">$72K</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-16 text-xs text-purple-200">Month 12</div>
                                <div className="flex-1 h-8 bg-white/10 rounded-lg overflow-hidden relative">
                                    <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg" style={{ width: '100%' }}></div>
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold">$92K</span>
                                </div>
                            </div>
                        </div>

                        {/* Growth Badge */}
                        <div className="mt-4 flex items-center justify-center gap-2 bg-green-500/20 py-2 px-4 rounded-full">
                            <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-green-300" />
                            <span className="text-green-300 font-bold text-sm">+104% Revenue Growth</span>
                        </div>
                    </div>

                    {/* Before/After - 4 columns */}
                    <div className="lg:col-span-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <h3 className="text-lg font-bold mb-4 text-center">Practice Transformation</h3>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Before */}
                            <div className="text-center">
                                <div className="text-xs text-red-300 font-semibold mb-3 flex items-center justify-center gap-1">
                                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                                    Before
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-white/5 rounded-lg p-2">
                                        <div className="text-xl font-bold text-red-300">67%</div>
                                        <div className="text-[10px] text-purple-200">Collection</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2">
                                        <div className="text-xl font-bold text-red-300">23%</div>
                                        <div className="text-[10px] text-purple-200">Denials</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2">
                                        <div className="text-xl font-bold text-red-300">45h</div>
                                        <div className="text-[10px] text-purple-200">Admin/Wk</div>
                                    </div>
                                </div>
                            </div>

                            {/* After */}
                            <div className="text-center">
                                <div className="text-xs text-green-300 font-semibold mb-3 flex items-center justify-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    After
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-white/5 rounded-lg p-2">
                                        <div className="text-xl font-bold text-green-300">98%</div>
                                        <div className="text-[10px] text-purple-200">Collection</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2">
                                        <div className="text-xl font-bold text-green-300">2%</div>
                                        <div className="text-[10px] text-purple-200">Denials</div>
                                    </div>
                                    <div className="bg-white/5 rounded-lg p-2">
                                        <div className="text-xl font-bold text-green-300">5h</div>
                                        <div className="text-[10px] text-purple-200">Admin/Wk</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Stats - 3 columns */}
                    <div className="lg:col-span-3 grid grid-cols-2 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xl font-bold">$847K</div>
                                    <div className="text-xs text-purple-200">Avg Recovery/Year</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <SafeIcon icon={FiClock} className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xl font-bold">24h</div>
                                    <div className="text-xs text-purple-200">Claims Processing</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xl font-bold">98.5%</div>
                                    <div className="text-xs text-purple-200">Clean Claim Rate</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xl font-bold">200+</div>
                                    <div className="text-xs text-purple-200">Practices Served</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-8">
                    <button className="bg-white text-[#6634A1] px-8 py-3 rounded-xl font-bold hover:bg-purple-100 transition-all shadow-lg inline-flex items-center gap-2">
                        Get Your Free Assessment
                        <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
