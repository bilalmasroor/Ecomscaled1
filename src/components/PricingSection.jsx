import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 👈 Added Framer Motion
import ModalForm from "./ModalForm";

const PricingSection = ({ title, description, plans }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % plans.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + plans.length) % plans.length);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: 100,
      rotateY: 15,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 101, 177, 0.3)",
      transition: {
        duration: 0.15,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const navigationVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#005a9e",
      transition: {
        duration: 0.15
      }
    },
    tap: {
      scale: 0.9
    }
  };

  return (
    <motion.section 
      className="bg-white px-4 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto font-['Roboto'] text-center">
        <motion.h2 
          className="md:text-4xl text-3xl xl:text-5xl 2xl:text-6xl mx-auto font-extrabold mb-2 max-w-4xl px-4"
          variants={itemVariants}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-gray-600 mt-6 mb-12 xl:max-w-xl mx-auto text-base md:text-xl 2xl:text-2xl"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        {/* ✅ Desktop: original layout with animations */}
        <motion.div 
          className="hidden sm:flex justify-center flex-wrap gap-8"
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="rounded-xl hover:shadow-2xl cursor-pointer duration-300 2xl:w-96 lg:w-80 md:w-72 w-full max-w-xs overflow-hidden shadow-lg flex flex-col bg-white"
              style={{ maxHeight: "700px" }}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Top Section */}
              <motion.div
                className="bg-blue-400 h-32 relative"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-extrabold">
                    {plan.title}
                  </h3>
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 overflow-auto px-5 py-4 flex items-center justify-center">
                <motion.div 
                  className="space-y-4 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <ul className="list-disc ml-5 space-y-1">
                    {plan.items.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-black text-sm sm:text-base"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + idx * 0.06 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Button */}
              <div className="mt-auto flex justify-center py-6">
                <motion.div 
                  className="inline-block relative"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <ModalForm
                    bg_color="bg-blue-400"
                    title="PURCHASE NOW"
                    customStyle="bg-blue-400 text-white cursor-pointer text-base 2xl:text-lg font-semibold py-1.5 2xl:py-4 2xl:px-20 px-14 relative z-10 rounded-none"
                    showTriangles={true}
                  />
                </motion.div>
              </div>
              <div className="h-4 bg-[#0065B1]"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ Mobile Slider with enhanced animations */}
        <motion.div 
          className="sm:hidden relative w-full max-w-xs mx-auto"
          variants={itemVariants}
        >
          {/* Single Visible Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="rounded-xl overflow-hidden shadow-lg flex flex-col bg-white h-[500px]"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Top Section */}
              <motion.div
                className="bg-blue-400 h-32 relative"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-extrabold">
                    {plans[current].title}
                  </h3>
                </div>
              </motion.div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-auto px-5 py-4 flex items-center justify-center min-h-0">
                <motion.div 
                  className="space-y-4 text-left w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ul className="list-disc ml-5 space-y-1">
                    {plans[current].items.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-black text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + idx * 0.06 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Button */}
              <div className="mt-auto flex justify-center py-6">
                <motion.div 
                  className="inline-block relative"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <ModalForm
                    bg_color="bg-blue-400"
                    title="PURCHASE NOW"
                    customStyle="bg-blue-400 text-white cursor-pointer text-base font-semibold py-1.5 px-14 relative z-10 rounded-none"
                    showTriangles={true}
                  />
                </motion.div>
              </div>

              <div className="h-4 bg-[#0065B1]"></div>
            </motion.div>
          </AnimatePresence>

          {/* Prev/Next Buttons */}
          <motion.div 
            className="flex justify-center mt-6 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={() =>
                setCurrent((prev) => (prev - 1 + plans.length) % plans.length)
              }
              className="w-8 h-8 rounded bg-[#0065B1] text-white font-bold"
              variants={navigationVariants}
              whileHover="hover"
              whileTap="tap"
            >
              &#8249;
            </motion.button>
            <motion.button
              onClick={() => setCurrent((prev) => (prev + 1) % plans.length)}
              className="w-8 h-8 rounded bg-[#0065B1] text-white font-bold"
              variants={navigationVariants}
              whileHover="hover"
              whileTap="tap"
            >
              &#8250;
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PricingSection;
