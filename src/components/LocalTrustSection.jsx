import React from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin } = FiIcons;

const LocalTrustSection = () => {
    return (
        <section className="py-16 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
            <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
                <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">Serving Clinics In</p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-slate-300 font-medium">
                    {['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'].map((city, i) => (
                        <span key={i} className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                            <SafeIcon icon={FiMapPin} className="text-cyan-500 w-4 h-4" /> {city}
                        </span>
                    ))}
                    <span className="text-cyan-400 font-bold">+ 42 States</span>
                </div>
            </div>
        </section>
    );
};

export default LocalTrustSection;
