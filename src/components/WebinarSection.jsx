import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiClock } = FiIcons;

const WebinarSection = () => {
    const webinars = [
        {
            id: "ZuUC-Q58RI4",
            title: "Mental Health Billing Optimization",
            duration: "45 min"
        },
        {
            id: "N6e2UzchN1c",
            title: "TMS Revenue Cycle Management",
            duration: "38 min"
        },
        {
            id: "Eok1FDfXthE",
            title: "Virtual Assistant Implementation",
            duration: "42 min"
        }
    ];

    return (
        <section className="py-12 bg-slate-50">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-3">
                        Explore Our <span className="text-[#6634A1]">Webinar Archive</span>
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        Expert-led training sessions to help you maximize practice revenue
                    </p>
                </div>

                {/* Webinars Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {webinars.map((webinar, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#6634A1]/40 hover:shadow-lg transition-all group">
                            <div className="relative aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${webinar.id}`}
                                    title={webinar.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-black mb-2 text-sm">{webinar.title}</h3>
                                <div className="flex items-center text-gray-600 text-xs">
                                    <SafeIcon icon={FiClock} className="w-3 h-3 mr-1" />
                                    {webinar.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebinarSection;
