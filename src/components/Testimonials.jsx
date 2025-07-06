import { useState } from "react";
import { Quote } from "lucide-react";
import { assets } from "../assets/config";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Chloe",
    position: "",
    image: assets.image1,
    text: "I was really hesitant about getting outside help for my business, but Ecomscaled honestly changed my mind. They just got it. My voice, my style, my goals — they understood it all. Working with them felt easy, like I had someone in my corner who actually cared.",
  },
  {
    name: "Maddie",
    position: "",
    image: assets.image2,
    text: "Working with Ecomscaled felt like having that one friend who just *gets it*. They made everything from launching my store to running ads super chill. I didn't have to stress — they handled the messy stuff while I focused on my products.",
  },
  {
    name: "Zach",
    position: "",
    image: assets.image3,
    text: "I've worked with a few marketing teams before, but Ecomscaled was different.They actually listened, understood what I wanted, and just made things happen. It wasn't overwhelming — it felt easy and in control. Super reliable, super supportive.",
  },
  {
    name: "Jake",
    position: "",
    image: assets.image4,
    text: "We'd tried other agencies before, but it never felt quite right. Ecomscaled really stood out — they were easy to talk to, got what our brand was about, and delivered exactly what we needed. It didn't feel like just another service — it felt like teamwork.",
  },
  {
    name: "Ethan",
    position: "",
    image: assets.image5,
    text: "Total lifesavers. I'm not a tech person, and they didn't make me feel dumb for asking questions. They walked me through everything, and my sales honestly speak for themselves now.",
  },
  {
    name: "Ryan ",
    position: "",
    image: assets.image6,
    text: "I've been burned by 'experts' before, so I was cautious. But Ecomscaled actually delivered — and they made it fun. It never felt like a boring client-agency thing. It felt like a team win every time something worked.",
  },
  {
    name: "Alyssa ",
    position: "",
    image: assets.image7,
    text: "I was totally lost on how to start on TikTok Shop. Ecomscaled came in with ideas, made it fun, and helped me go live with confidence. And yep — we made sales fast!",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visualIndex, setVisualIndex] = useState(0); // For card colors during animation
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

    setTimeout(() => {
      setVisualIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

    setTimeout(() => {
      setVisualIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsAnimating(false);
    }, 600);
  };

  const getCardClasses = (relativeIndex, isLeftmostVisible) => {
    const baseClasses =
      "border border-[rgba(255,255,255,0.5)] p-8 lg:p-8 md:p-14 shadow-lg flex-shrink-0";

    if (isLeftmostVisible) {
      return `${baseClasses} bg-white text-black`;
    } else {
      return `${baseClasses} bg-[#0065B1] text-white opacity-80`;
    }
  };

  // Mobile navigation
  const nextSlideMobile = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

    setTimeout(() => {
      setVisualIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 400);
  };

  const prevSlideMobile = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

    setTimeout(() => {
      setVisualIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsAnimating(false);
    }, 400);
  };

  return (
    <section className="bg-gradient-to-r from-[#004a91] to-[#0095dc] py-16 px-6 md:px-24 text-white overflow-hidden">
      <div className="w-full font-['Poppins'] mx-auto">
        <p className="text-sm uppercase mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-12 max-w-xl leading-tight">
          Hear people say <br /> and reveal our{" "}
          <span className="text-white">Advertising services</span>
        </h2>

        {/* Desktop Cards */}
        <div className="hidden sm:flex relative min-h-[450px] perspective-1000 justify-center">
          <div className="overflow-hidden max-w-7xl w-full pt-8">
            <motion.div
              className="flex gap-10 2xl:gap-20 items-start"
              animate={{
                x: `calc(-${currentIndex * 430}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.6,
              }}
            >
              {testimonials.map((item, idx) => {
                const relativeIndex = idx - currentIndex;
                const visualRelativeIndex = idx - visualIndex;
                const isLeftmostVisible = visualRelativeIndex === 0;
                const isCurrentlyLeftmost = relativeIndex === 0;

                return (
                  <motion.div
                    key={`testimonial-${idx}`}
                    className={`${getCardClasses(
                      relativeIndex,
                      isLeftmostVisible
                    )} font-['Poppins']`}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                      width: "390px",
                      minWidth: "340px",
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: isCurrentlyLeftmost ? 0 : 3,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.6,
                      },
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: isCurrentlyLeftmost ? 0 : 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="flex items-center mb-4 font-['Poppins'] gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="size-24 object-cover rounded-full"
                      />
                      <div>
                        <h4 className="font-bold lg:text-2xl 2xl:text-3xl md:text-xl text-lg">
                          {item.name}
                        </h4>
                        <p className="text-sm md:text-md xl:text-base 2xl:text-lg mt-1 opacity-80">
                          {item.position}
                        </p>
                      </div>
                    </div>
                    <p className="md:text-base 2xl:text-base text-xs leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          <Quote className="text-5xl absolute top-0 right-0 text-white opacity-10 hidden md:block" />
        </div>

        {/* Mobile Slider */}
        <div className="sm:hidden mt-10 w-full flex flex-col items-center gap-6">
          <div className="w-full min-h-[300px] relative overflow-hidden">
            <motion.div
              className="flex w-full"
              animate={{
                x: `calc(-${currentIndex * 100}%)`,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
                duration: 0.5,
              }}
            >
              {testimonials.map((item, idx) => (
                <div
                  key={`mobile-testimonial-${idx}`}
                  className="border border-[rgba(255,255,255,0.5)] w-full p-8 shadow-lg bg-white text-black font-['Poppins'] flex-shrink-0"
                >
                  <div className="flex items-center mb-4 font-['Poppins'] gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="size-24 object-cover rounded-full"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-sm opacity-70">{item.position}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <motion.button
              onClick={prevSlideMobile}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full bg-white text-[#0065B1] font-bold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8249;
            </motion.button>
            <motion.button
              onClick={nextSlideMobile}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full bg-white text-[#0065B1] font-bold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8250;
            </motion.button>
          </div>
        </div>

        {/* Dots & Navigation for Desktop */}
        <div className="hidden sm:flex flex-row justify-between items-center mt-10 px-4 gap-4">
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <motion.span
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                  idx === currentIndex ? "bg-white" : "bg-white/30"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => {
                  if (!isAnimating && idx !== currentIndex) {
                    setIsAnimating(true);
                    setCurrentIndex(idx);
                    setTimeout(() => {
                      setVisualIndex(idx);
                      setIsAnimating(false);
                    }, 600);
                  }
                }}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            <motion.button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full bg-white text-[#0065B1] font-bold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8249;
            </motion.button>
            <motion.button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full bg-white text-[#0065B1] font-bold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8250;
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
