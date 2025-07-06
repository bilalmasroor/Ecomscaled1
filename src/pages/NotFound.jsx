import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-7xl md:text-9xl font-extrabold text-[#0065B1]"
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        404
      </motion.h1>
      <motion.h2 
        className="text-2xl md:text-4xl font-bold text-gray-800 mt-4"
        variants={itemVariants}
      >
        Page Not Found
      </motion.h2>
      <motion.p 
        className="text-gray-600 mt-4 mb-8 max-w-md"
        variants={itemVariants}
      >
        Sorry, the page you are looking for does not exist. It might have been
        moved or deleted.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Link
          to="/"
          className="bg-[#0065B1] hover:bg-[#00529c] text-white font-semibold px-6 py-3 rounded-md transition duration-300 inline-block"
        >
          Go Back Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
