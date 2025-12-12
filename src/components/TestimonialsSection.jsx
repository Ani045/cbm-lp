import React, { useState, useEffect } from 'react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronLeft, FiChevronRight, FiStar } = FiIcons;

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Kyle Babick, Ph.D.",
            location: "Dallas, Texas",
            quote: "I turned my precert, billing and collections over to CBM over 4 years ago after doing it in house for 20 years. I wish I had done it sooner. They are efficient, thorough, and responsive. CBM has worked with me to implement practice-specific procedures that are thorough and efficient.",
            initial: "K"
        },
        {
            name: "Paul Andrews, Ph.D",
            location: "Healthcare Professional",
            quote: "After having a major problem with Medicare billing and spending several hours trying unsuccessfully to figure out the solution myself, I turned to CBM upon the advice of a colleague. I am delighted at the services provided. I never have to worry about pre-certification or insurance billing.",
            initial: "P"
        },
        {
            name: "Dr. Ariel De Llanos, MD",
            location: "Focus & Balance, PLLC",
            quote: "CBM has helped for many years with the billing and verifications of our psychiatric practice. They have done exceptional work not only with the billing but also helping our medical office with management. We recommend CBM 100 percent.",
            initial: "A"
        },
        {
            name: "Dr. Kris Houser",
            location: "Board Certified Psychiatrist",
            quote: "CBM has gone above and beyond to assist with helping our TMS clinic run smoothly from start to finish. The amount of professionalism and knowledge they presented on complex cases made the difference in seeing our patients get the care they need and deserve.",
            initial: "K"
        },
        {
            name: "Dr. Kelly Ownby",
            location: "Board Certified Psychiatrist",
            quote: "When my partner and I decided to open a new TMS practice, we were a bit naïve about how extensive the process would be. We would have never made it without the support and guidance of CBM. I would recommend CBM to anyone setting up a medical practice.",
            initial: "K"
        },
        {
            name: "Dr. Lynn Bohecker, LMFT",
            location: "Mental Health Professional",
            quote: "You scheduled an onboarding meeting one day and the next day we were up and running with CBM handling all of our phone calls and scheduling. Two days later I went on vacation. When I returned there were no fires to put out.",
            initial: "L"
        },
        {
            name: "Barbara Cherry, DNSc, MBA, RN",
            location: "Professor, Associate Dean",
            quote: "Ms. Andrews was the utmost professional and provided us with detailed information about billing and credentialing processes. She has a high level of expertise in all phases of clinic management and I would highly recommend her services.",
            initial: "B"
        },
        {
            name: "Terry Abraham, LPC",
            location: "Healthcare Practitioner",
            quote: "Since I have turned over my VA work to CBM, my business has taken off! The staff is always responsive and professional. I get great feedback from my staff and our clients about the courtesy and professionalism. They have made my life so much easier!",
            initial: "T"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-slide every 5 seconds
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const goToPrev = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const current = testimonials[currentIndex];

    return (
        <section className="py-12 bg-white">
            <div className="container max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                        Trusted by <span className="text-[#6634A1]">200+ Practices</span>
                    </h2>
                    <p className="text-slate-600">What our clients say about CBM Medical Management</p>
                </div>

                {/* Testimonial Card */}
                <div className="relative">
                    <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
                        {/* Stars */}
                        <div className="flex gap-1 justify-center mb-4 text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <SafeIcon key={i} icon={FiStar} className="w-5 h-5 fill-current" />
                            ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-slate-700 text-center text-base md:text-lg leading-relaxed mb-6 italic min-h-[80px]">
                            "{current.quote}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6634A1] to-purple-600 flex items-center justify-center text-white text-lg font-bold">
                                {current.initial}
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-slate-900 text-sm">{current.name}</div>
                                <div className="text-slate-500 text-xs">{current.location}</div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                    >
                        <SafeIcon icon={FiChevronLeft} className="w-5 h-5 text-slate-600" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors"
                    >
                        <SafeIcon icon={FiChevronRight} className="w-5 h-5 text-slate-600" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => { setIsAutoPlaying(false); setCurrentIndex(idx); }}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-[#6634A1] w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
