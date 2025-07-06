import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { assets, companies } from "../assets/config";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";

export default function PartnerSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const checklistVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const checklistItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.div 
      className="w-full pt-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Infinite Logo Slider */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Marquee gradient={false} speed={60}>
          {companies.map((logo, i) => (
            <motion.img
              key={i}
              src={logo}
              alt="partner"
              className="2xl:h-36 md:h-28 h-24 object-contain"
            />
          ))}
        </Marquee>
      </motion.div>

      {/* Main Section */}
      <motion.div 
        className="w-full bg-gray-50 flex flex-col md:flex-row items-center mt-5 px-4 gap-8"
        variants={itemVariants}
      >
        {/* Image */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          variants={imageVariants}
        >
          <motion.img
            src={assets.about}
            alt="happy woman"
            className="2xl:max-w-2xl lg:max-w-lg max-w-md"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div 
          className="w-full font-['Roboto'] md:w-1/2 py-3"
          variants={itemVariants}
        >
          <motion.h2 
            className="md:text-3xl lg:text-4xl xl:text-5xl text-2xl 2xl:text-7xl font-bold"
            variants={itemVariants}
          >
            Why Work With Us
          </motion.h2>

          {/* Checklist */}
          <ul className="space-y-2 mt-10 font-['Roboto'] black">
            {[
              "We know the backend of every major platform",
              "No cookie-cutter playbooks — everything's customized",
              "Transparent communication, always",
              "A lean team with deep expertise",
              "Built to support brands at every growth stage",
            ].map((item, i) => (
              <li
                key={i}
                className="text-md md:text-xl lg:text-xl 2xl:text-2xl flex items-center gap-2"
              >
                <img
                  src={assets.checkbox}
                  alt=""
                  className="xl:size-7 size-5"
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <motion.div 
            className="md:mt-12 mt-8 flex font-['Roboto'] md:gap-7 gap-4 items-center"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <ModalForm bg_color="bg-[#0065b1]" title="Get Started" />
            </motion.div>
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
      </motion.div>
    </motion.div>
  );
}
