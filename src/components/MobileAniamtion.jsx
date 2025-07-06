import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ModalForm from "./ModalForm";
import { Link } from "react-router-dom";
import mobileFrameSvg from "../assets/images/mobile-frame.svg";

export default function MobileAniamtion({ screenshots }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const mouseStartX = useRef(null);
  const mouseEndX = useRef(null);
  const isDragging = useRef(false);

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrent((current - 1 + screenshots.length) % screenshots.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 400);
  };

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrent((current + 1) % screenshots.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 400);
  };

  // Touch events
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
    e.preventDefault(); // Prevent default touch behaviors
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    e.preventDefault(); // Prevent default touch behaviors

    if (touchStartX.current - touchEndX.current > 50) {
      next(); // swipe left
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prev(); // swipe right
    }
  };

  // Mouse events
  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
    isDragging.current = true;
    e.preventDefault(); // Prevent text selection and default drag behaviors
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    mouseEndX.current = e.clientX;
    e.preventDefault(); // Prevent default drag behaviors
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (mouseStartX.current && mouseEndX.current) {
      const deltaX = mouseStartX.current - mouseEndX.current;
      if (deltaX > 50) {
        next(); // drag left
      } else if (deltaX < -50) {
        prev(); // drag right
      }
    }

    mouseStartX.current = null;
    mouseEndX.current = null;
  };

  const handleMouseLeave = () => {
    // Reset mouse drag if cursor leaves the area
    isDragging.current = false;
    mouseStartX.current = null;
    mouseEndX.current = null;
  };

  // Prevent default drag behavior on all images
  const handleDragStart = (e) => {
    e.preventDefault();
    return false;
  };

  const getPreviewIndexes = () => {
    const first = (current + 1) % screenshots.length;
    const second = (current + 2) % screenshots.length;
    return [first, second];
  };

  const [preview1, preview2] = getPreviewIndexes();

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.div 
      className="flex flex-col lg:flex-row items-center justify-between px-4 py-8 md:py-16 md:px-0 lg:px-14 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Left Section */}
      <motion.div 
        className="sm:w-2/3 font-['Roboto'] px-5 lg:w-2/5 md:w-3/4 mb-6 md:mb-0 md:px-10"
        variants={textVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl font-extrabold text-black mb-4 lg:mb-6"
          variants={textVariants}
        >
          Success <span className="text-[#0065B1]">Stories</span>
        </motion.h2>
        <motion.p 
          className="mb-4 text-md sm:text-base md:text-lg lg:text-xl 2xl:text-2xl leading-relaxed"
          variants={textVariants}
        >
          At EcomScaled, our success stories speak for themselves. From growing
          startups to established brands and social platforms, we've empowered
          countless businesses to scale their online presence, maximize profit
          margins, and reach wider audiences through our expert e-commerce
          strategies.
        </motion.p>
        <motion.div 
          className="md:mt-12 mt-8 flex font-['Roboto'] md:gap-4 gap-2 items-center"
          variants={textVariants}
        >
          <ModalForm bg_color="bg-[#0065b1]" title="Get Started" />
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              to="/contact"
              className="px-6 py-2 text-sm sm:text-base md:text-lg lg:text-xl text-center rounded-full border border-[#0065B1] hover:bg-[#0065b1] text-[#0065B1] hover:text-white duration-300"
            >
              Get A Quote
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <div className="flex flex-col items-center w-full md:w-3/4 md:mt-10 lg:mt-0 lg:w-3/5">
        <div
          className="flex flex-col sm:flex-row items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* Current Mobile with SVG Frame */}
          <div
            className={`relative w-[250px] h-[480px] sm:h-[300px] sm:w-[160px] md:h-[350px] md:w-[190px] lg:w-[220px] lg:h-[420px] xl:w-[220px] xl:h-[420px] touch-auto transform transition-all duration-500 ease-out ${
              isTransitioning
                ? "scale-110 rotate-3 translate-y-2 opacity-90"
                : "scale-100 rotate-0 translate-y-0 opacity-100"
            }`}
          >
            {/* Background blur effect during transition */}
            <div
              className={`absolute inset-0 bg-blue-500/10 rounded-3xl transition-all duration-500 ${
                isTransitioning
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
            />

            {/* SVG Mobile Frame */}
            <img
              src={mobileFrameSvg}
              alt="Mobile Frame"
              className="absolute inset-0 w-full h-full z-10 pointer-events-none object-cover"
              onDragStart={handleDragStart}
            />
            {/* Screenshot Image Inside Frame */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <img
                src={screenshots[current]}
                alt="Mobile Screenshot"
                className={`w-[98%] h-[98%] object-contain rounded-lg transition-all duration-500 ease-out ${
                  isTransitioning
                    ? "scale-95 brightness-75"
                    : "scale-100 brightness-100"
                }`}
                onDragStart={handleDragStart}
              />
            </div>
          </div>

          {/* Preview Images - hidden on small screens */}
          <div className="hidden sm:flex gap-3 justify-center items-center mt-4 sm:mt-0 sm:ml-4">
            <img
              src={screenshots[preview1]}
              alt="Preview 1"
              className={`w-[120px] h-[220px] md:w-[170px] md:h-[320px] lg:w-[140px] lg:h-[260px] object-contain rounded-xl shadow transition-all duration-700 ease-out hover:scale-105 ${
                isTransitioning
                  ? "translate-x-4 translate-y-2 rotate-1 opacity-70"
                  : "translate-x-0 translate-y-0 rotate-0 opacity-100"
              }`}
              onDragStart={handleDragStart}
            />
            <img
              src={screenshots[preview2]}
              alt="Preview 2"
              className={`w-[120px] h-[220px] md:w-[170px] md:h-[320px] lg:w-[140px] lg:h-[260px] object-contain rounded-xl shadow transition-all duration-700 ease-out hover:scale-105 ${
                isTransitioning
                  ? "translate-x-8 translate-y-4 rotate-2 opacity-50"
                  : "translate-x-0 translate-y-0 rotate-0 opacity-100"
              }`}
              onDragStart={handleDragStart}
            />
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={prev}
            className={`bg-white rounded shadow p-2 hover:bg-gray-200 transition-all duration-200 ${
              isTransitioning
                ? "opacity-50 cursor-not-allowed scale-95"
                : "opacity-100 cursor-pointer scale-100 hover:scale-105"
            }`}
            aria-label="Previous"
            disabled={isTransitioning}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className={`bg-white rounded shadow p-2 hover:bg-gray-200 transition-all duration-200 ${
              isTransitioning
                ? "opacity-50 cursor-not-allowed scale-95"
                : "opacity-100 cursor-pointer scale-100 hover:scale-105"
            }`}
            aria-label="Next"
            disabled={isTransitioning}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
