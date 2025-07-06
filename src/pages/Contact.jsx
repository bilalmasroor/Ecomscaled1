import { motion } from "framer-motion";
import ScheduleConsultation from "../components/ScheduleConsultation";

const Contact = () => {
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

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <motion.div 
        className="md:h-[80vh] aboutHero h-[50vh] flex flex-col items-center justify-center -z-10 relative w-full"
        variants={heroVariants}
      >
        <motion.h1 
          className="text-center text-xl md:text-3xl 2xl:text-4xl font-['Roboto'] font-bold mt-5"
          variants={textVariants}
        >
          Get In Touch
        </motion.h1>
        <motion.h1 
          className='lg:text-7xl 2xl:text-8xl md:text-6xl font-["Roboto"] text-5xl font-bold'
          variants={textVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          Ecomscaled
        </motion.h1>
      </motion.div>

      {/* Content Card */}
      <motion.div 
        className='md:w-2/3 w-11/12 font-["Roboto"] px-3 2xl:py-5 py-2 rounded-2xl 2xl:-mt-40 -mt-20 mx-auto shadow-xl z-10 bg-white text-black text-center'
        variants={cardVariants}
        whileHover={{ 
          y: -5,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          transition: { duration: 0.3 }
        }}
      >
        <motion.h1 
          className="font-black mb-2 my-8 text-2xl lg:text-3xl 2xl:text-6xl"
          variants={textVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          Let's Scale Your Brand.
        </motion.h1>
        <motion.p 
          className="text-gray-900 2xl:my-10 my-4 text-sm md:text-md lg:text-lg 2xl:text-3xl"
          variants={textVariants}
        >
          We'd love to hear about your product and your goals. Whether you're
          starting <br className="xl:block hidden" /> fresh or scaling an
          existing store, we're here to support you with{" "}
          <br className="md:block hidden" /> the tools and strategies that
          actually work.
        </motion.p>
      </motion.div>

      {/* Schedule Consultation Component */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.6,
          ease: "easeOut"
        }}
      >
        <ScheduleConsultation />
      </motion.div>
    </motion.div>
  );
};

export default Contact;
