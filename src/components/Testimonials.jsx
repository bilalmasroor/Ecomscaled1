import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import { assets } from "../assets/config";

const testimonials = [
  {
    name: "Chloe",
    position: "E-commerce Owner",
    image: assets.image1,
    text: "I was really hesitant about getting outside help for my business, but Ecomscaled honestly changed my mind. They just got it. My voice, my style, my goals — they understood it all. Working with them felt easy, like I had someone in my corner who actually cared.",
    rating: 5,
  },
  {
    name: "Maddie",
    position: "Startup Founder",
    image: assets.image2,
    text: "Working with Ecomscaled felt like having that one friend who just *gets it*. They made everything from launching my store to running ads super chill. I didn't have to stress — they handled the messy stuff while I focused on my products.",
    rating: 5,
  },
  {
    name: "Zach",
    position: "Business Owner",
    image: assets.image3,
    text: "I've worked with a few marketing teams before, but Ecomscaled was different. They actually listened, understood what I wanted, and just made things happen. It wasn't overwhelming — it felt easy and in control. Super reliable, super supportive.",
    rating: 5,
  },
  {
    name: "Jake",
    position: "Brand Manager",
    image: assets.image4,
    text: "We'd tried other agencies before, but it never felt quite right. Ecomscaled really stood out — they were easy to talk to, got what our brand was about, and delivered exactly what we needed. It didn't feel like just another service — it felt like teamwork.",
    rating: 5,
  },
  {
    name: "Ethan",
    position: "Entrepreneur",
    image: assets.image5,
    text: "Total lifesavers. I'm not a tech person, and they didn't make me feel dumb for asking questions. They walked me through everything, and my sales honestly speak for themselves now.",
    rating: 5,
  },
  {
    name: "Ryan",
    position: "CEO",
    image: assets.image6,
    text: "I've been burned by 'experts' before, so I was cautious. But Ecomscaled actually delivered — and they made it fun. It never felt like a boring client-agency thing. It felt like a team win every time something worked.",
    rating: 5,
  },
  {
    name: "Alyssa",
    position: "TikTok Shop Owner",
    image: assets.image7,
    text: "I was totally lost on how to start on TikTok Shop. Ecomscaled came in with ideas, made it fun, and helped me go live with confidence. And yep — we made sales fast!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize component to prevent initial transition flicker
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index =
        (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({
        ...testimonials[index],
        position: i,
        originalIndex: index,
      });
    }
    return visible;
  };

  return (
    <section className="bg-gradient-to-br from-[#004a91] via-[#0065B1] to-[#0095dc] py-12 px-6 text-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-sm uppercase tracking-wider mb-4 opacity-90 font-medium">
            What Our Clients Say
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Real Stories,{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Real Results
            </span>
          </h2>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Discover how we've transformed businesses and built lasting
            partnerships
          </p>
        </div>

        {/* Main testimonial carousel */}
        <div className="relative">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="relative h-[500px] flex items-center justify-center">
              {getVisibleTestimonials().map((testimonial) => {
                const { position, originalIndex } = testimonial;
                const isCenter = position === 0;
                const isAdjacent = Math.abs(position) === 1;
                const isEdge = Math.abs(position) === 2;

                return (
                  <div
                    key={`desktop-${originalIndex}`}
                    className={`absolute transition-all duration-300 ease-out cursor-pointer ${
                      isCenter ? "z-30" : isAdjacent ? "z-20" : "z-10"
                    }`}
                    style={{
                      transform: `
                        translateX(${position * 280}px) 
                        translateY(${Math.abs(position) * 20}px)
                        scale(${isCenter ? 1 : isAdjacent ? 0.85 : 0.7})
                        rotateY(${position * 15}deg)
                      `,
                      opacity: isEdge ? 0.4 : isAdjacent ? 0.7 : 1,
                    }}
                    onClick={() => !isCenter && goToSlide(originalIndex)}
                  >
                    <div
                      className={`
                      w-80 h-[27rem] p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 flex flex-col
                      ${
                        isCenter
                          ? "bg-white text-gray-800 border-white/20 shadow-2xl"
                          : "bg-white/10 text-white border-white/30 shadow-xl"
                      }
                    `}
                    >
                      {/* Rating */}
                      <div className="flex items-center mb-4 flex-shrink-0">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <div className="relative mb-6 flex-grow min-h-0">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 opacity-20 flex-shrink-0" />
                        <div className="pl-6 h-full overflow-hidden">
                          <p className="text-sm leading-relaxed italic h-full overflow-y-auto scrollbar-thin scrollbar-thumb-white-20 scrollbar-track-transparent pr-2">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>

                      {/* Profile */}
                      <div className="flex items-center flex-shrink-0">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-white/30"
                            loading="eager"
                            style={{ aspectRatio: "1 / 1" }}
                          />
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-4 min-w-0 flex-grow">
                          <h4 className="font-bold text-lg truncate">
                            {testimonial.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="relative overflow-hidden rounded-3xl touch-pan-x">
              <div
                className={`flex ${
                  isLoaded
                    ? "transition-transform duration-300 ease-in-out"
                    : ""
                }`}
                style={{
                  transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
                  willChange: isLoaded ? "transform" : "auto",
                }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={`mobile-${idx}`}
                    className="w-full flex-shrink-0 p-0 md:p-4"
                    style={{ willChange: "transform" }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm text-gray-800 md:p-8 p-4 rounded-3xl shadow-2xl h-[500px] flex flex-col transform-gpu testimonial-card">
                      {/* Rating */}
                      <div className="flex items-center justify-center mb-6 flex-shrink-0">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1"
                          />
                        ))}
                      </div>

                      {/* Profile centered */}
                      <div className="text-center mb-6 flex-shrink-0">
                        <div className="relative inline-block">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 mx-auto shadow-lg"
                            loading="eager"
                            style={{ aspectRatio: "1 / 1" }}
                          />
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white"></div>
                        </div>
                        <h4 className="font-bold text-xl mt-4">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="relative flex-grow min-h-0">
                        <Quote className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 text-blue-200" />
                        <div className="pt-6 h-full overflow-hidden">
                          <p className="text-center leading-relaxed italic h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center md:mt-3 mt-6 gap-8">
            {/* Dots */}
            <div className="flex space-x-3">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-200 rounded-full ${
                    idx === currentIndex
                      ? "w-12 h-3 bg-white shadow-lg"
                      : "w-3 h-3 bg-white/40 hover:bg-white/60"
                  }`}
                  style={{
                    boxShadow:
                      idx === currentIndex
                        ? "0 4px 20px rgba(255,255,255,0.4)"
                        : "0 2px 10px rgba(0,0,0,0.2)",
                  }}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="hidden md:flex space-x-4">
              <button
                onClick={prevSlide}
                disabled={isAnimating}
                className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 disabled:opacity-50 flex items-center justify-center group border border-white/20"
              >
                <span className="text-2xl group-hover:-translate-x-0.5 transition-transform duration-200">
                  ‹
                </span>
              </button>
              <button
                onClick={nextSlide}
                disabled={isAnimating}
                className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 disabled:opacity-50 flex items-center justify-center group border border-white/20"
              >
                <span className="text-2xl group-hover:translate-x-0.5 transition-transform duration-200">
                  ›
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* Mobile optimization */
        .touch-pan-x {
          touch-action: pan-x;
          -webkit-overflow-scrolling: touch;
        }

        .transform-gpu {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }

        .scrollbar-thumb-white-20::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }

        .scrollbar-thumb-gray-300::-webkit-scrollbar-thumb {
          background-color: rgb(209, 213, 219);
          border-radius: 2px;
        }

        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background-color: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.4);
        }

        /* Smooth mobile scrolling */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }

          /* Prevent layout shifts on mobile */
          .testimonial-card {
            min-height: 500px;
            contain: layout;
          }

          /* Hide scrollbars on mobile */
          .scrollbar-thin {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }

          .scrollbar-thin::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
            width: 0;
            height: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
