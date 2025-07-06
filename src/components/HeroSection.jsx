import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets, services_image } from "../assets/config";

const HeroSection = () => {
  const services = [
    {
      title: "Amazon FBA Automation",
      icon: services_image.amazon_1,
      path: "/amazon",
    },
    {
      title: "Walmart Automation",
      icon: services_image.walmart_1,
      path: "/walmart",
    },
    {
      title: "Shopify Dropshipping Automation",
      icon: assets.hero_shopify,
      path: "/shopify",
    },
    {
      title: "Tiktok Shop Automation",
      icon: assets.hero_tiktok,
      path: "/tiktok",
    },
  ];

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const serviceButtonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col-reverse lg:flex-row w-full min-h-[80vh] text-white background pb-5 md:pb-0"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-[60%] px-4 sm:px-10 lg:px-20 2xl:px-32 pb-10 md:pb-20 flex flex-col justify-center mt-14 md:mt-7"
        variants={itemVariants}
      >
        {/* Stars & Review */}
        <motion.div
          className="flex items-center gap-2 text-white mb-4"
          variants={itemVariants}
        >
          <span className="text-lg sm:text-xl lg:text-2xl font-semibold">
            Excellent
          </span>
          <span className="flex items-center gap-1.5">
            <img src={assets.star} className="w-20 sm:w-24" alt="stars" />
          </span>
          <span className="text-xs sm:text-sm">Trustpilot</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-2xl capitalize sm:text-3xl lg:text-4xl 2xl:text-5xl  font-bold leading-tight font-['Poppins']"
          variants={itemVariants}
        >
          scale smarter. sell bigger.
        </motion.h1>

        {/* Services Buttons */}
        <motion.div
          className="flex flex-wrap gap-1 my-7 sm:mt-10 sm:gap-4 font-['Afacad'] sm:justify-start"
          variants={itemVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={serviceButtonVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="flex items-center gap-2 xl:gap-3.5 sm:bg-white bg-transparent pl-2 2xl:pr-8 pr-4 py-1.5 rounded-full shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <img
                  src={service.icon}
                  alt={service.title}
                  className="rounded-full 2xl:w-16 2xl:h-16 size-12"
                />
                <span className="text-[#00ADEE] text-base 2xl:text-2xl lg:text-lg font-semibold hidden sm:inline-block">
                  {service.title}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="w-full lg:w-[40%] flex justify-center lg:items-end items-center pt-6 md:pt-0 px-4 sm:px-8 lg:px-0"
        variants={imageVariants}
      >
        <motion.img
          src={assets.banner}
          alt="Main"
          className="w-full max-w-[400px] sm:max-w-[400px] xl:max-w-[700px] 2xl:max-w-[750px] object-contain self-end"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
