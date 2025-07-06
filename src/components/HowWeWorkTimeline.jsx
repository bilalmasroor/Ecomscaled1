import React, { useEffect, useRef, useState } from "react";
import { assets } from "../assets/config";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";

const steps = [
  {
    cardNo: 1,
    title: "Discovery Session",
    image: assets.Asset2,
    description: "We learn about your business requirements and scope the best approach for your needs.",
    bg_color: "bg-[#41969F]",
    text_color: "text-[#41969F]",
    width: "2xl:w-[500px]",
  },
  {
    cardNo: 2,
    title: "Data Collection & Analysis",
    description: "We're constantly gathering data to measure the results and course-correct if necessary.",
    image: assets.Asset4,
    bg_color: "bg-[#7498B3]",
    text_color: "text-[#7498B3]",
    width: "2xl:w-[520px]",
  },
  {
    cardNo: 3,
    title: "Implementation Plan",
    image: assets.Asset3,
    description: "We provide a detailed road map post-finalization covering timelines, milestones, and resource allocation",
    bg_color: "bg-[#C4C4C4]",
    text_color: "text-[#C4C4C4]",
    width: "2xl:w-[520px]",
  },
  {
    cardNo: 4,
    title: "Execution and Monitoring",
    image: assets.Asset6,
    description: "We work according to the plan laid out, continuously improving and adjusting our approach for maximum efficiency.",
    bg_color: "bg-[#EE7D00]",
    text_color: "text-[#EE7D00]",
    width: "2xl:w-[540px]",
  },
  {
    cardNo: 5,
    title: "Customized Solution",
    description: "Our specialists craft tailored solutions considering market trends, competitors, and best practices.",
    image: assets.Asset5,
    bg_color: "bg-[#D84C02]",
    text_color: "text-[#D84C02]",
    width: "2xl:w-[540px]",
  },
];

const HowWeWorkTimeline = () => {
  const sectionRef = useRef(null);
  const [playLottie, setPlayLottie] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [lottieKey, setLottieKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  
  // Framer Motion hooks
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  // Auto-slider for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Lottie animation on scroll into view (desktop only)
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPlayLottie(true);
          setAnimationComplete(false);
          setLottieKey((prev) => prev + 1);
        } else {
          setPlayLottie(false);
        }
      });
    };

    const observer = new window.IntersectionObserver(handleIntersection, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: assets.animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Only show Lottie on desktop
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 640;

  return (
    <div ref={sectionRef} className="relative flex flex-col items-center max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
      <motion.h2 
        className="text-center font-['Roboto'] text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        That's How We Work
      </motion.h2>

      {/* Lottie Animation (desktop only) */}
      <div className="hidden sm:block w-full">
        {isDesktop && (
          <motion.div 
            className="w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <Lottie
              key={lottieKey}
              options={lottieOptions}
              height={null}
              width={null}
              style={{ width: '100%', maxWidth: '100%' }}
              isStopped={false}
              isPaused={animationComplete}
              isClickToPauseDisabled={true}
              eventListeners={[
                {
                  eventName: 'complete',
                  callback: () => setAnimationComplete(true),
                },
              ]}
              speed={1.2}
            />
          </motion.div>
        )}
      </div>

      {/* Mobile Auto-Slider (1 → 2 → 3 → 4 → 5) */}
      <div className="sm:hidden w-full flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="flex px-4 gap-2 items-start h-[145px] w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <motion.img
                src={steps[currentIndex].image}
                alt=""
                className="h-20 w-28 shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <div className="flex-1 h-[145px] flex flex-col justify-start">
                <motion.h4 
                  className={`${steps[currentIndex].text_color} font-bold text-left text-lg mb-2`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {steps[currentIndex].title}
                </motion.h4>
                <motion.div 
                  className={`${steps[currentIndex].bg_color} h-2 rounded-xl mb-3`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                />
                <motion.p 
                  className="text-sm text-gray-800 leading-relaxed overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {steps[currentIndex].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Mobile slider indicators */}
        <div className="flex gap-2 mt-6">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-[#0065B1]' : 'w-2 bg-gray-300'
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Contact Us Button */}
      <motion.div 
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.button
          className="bg-[#0065B1] duration-300 font-['Roboto'] text-white px-6 py-2 2xl:px-20 lg:px-11 lg:py-3.5 lg:text-xl 2xl:py-5 rounded-full hover:bg-transparent border border-[#0065B1] hover:text-[#0065B1]"
          onClick={() => {
            navigate("/contact");
            window.scrollTo(0, 0);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HowWeWorkTimeline;
