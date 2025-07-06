import ModalForm from "./ModalForm";
import { motion } from "framer-motion";

// Animation variants for hero section
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const heroTextVariants = {
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

const Banner = ({ desktop, mobile }) => {
  return (
    <motion.div 
      className='md:h-[80vh] h-[50vh] font-["Poppins"] flex items-center justify-center relative w-full'
      variants={heroContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ✅ Mobile Image */}
      <img
        src={mobile}
        className="w-full h-full object-cover -z-10 absolute top-0 block md:hidden"
      />

      {/* ✅ Desktop Image */}
      <img
        src={desktop}
        className="w-full h-full object-cover -z-10 absolute top-0 hidden md:block"
      />

      {/* CTA Button */}
      <motion.div 
        className="absolute 2xl:bottom-20 2xl:left-20 bottom-10 left-10"
        variants={heroTextVariants}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        <ModalForm
          bg_color="bg-[#3d3d3d] hover:scale-105"
          title="Free Schedule"
        />
      </motion.div>
    </motion.div>
  );
};

const Benefit = ({ main, data }) => {
  return (
    <div className="max-w-7xl mx-auto mt-32 text-center">
      <motion.h3 
        className="text-lg md:text-2xl max-w-2xl 2xl:max-w-4xl xl:text-3xl mx-auto font-['Roboto'] 2xl:text-5xl font-black mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        {main}
      </motion.h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-sm md:text-base max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="border border-gray-300 hover:shadow-xl hover:translate-y-2.5 duration-300 cursor-pointer p-4 rounded-xl bg-gray-100"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1, 
              ease: "easeOut" 
            }}
            viewport={{ once: false, margin: "-100px" }}
            whileHover={{ 
              scale: 1.05, 
              transition: { duration: 0.2 } 
            }}
          >
            <h4 className="font-bold text-sm lg:text-base xl:text-lg mb-2">{item.title}</h4>
            <p className="text-xs lg:text-sm xl:text-base mt-3">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div 
        className="mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <button className="bg-[#0065B1] duration-300 font-['Roboto'] text-white px-6 py-2 2xl:px-16 2xl:py-4 xl:text-lg rounded-full hover:bg-transparent border border-[#0065B1] hover:text-[#0065B1] transition">
          Ready To Launch
        </button>
      </motion.div>
    </div>
  );
};

const ShopAbout = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-4 sm:px-6 md:px-12 lg:px-16 2xl:px-40 my-10">
      {/* Image Section */}
      <motion.div 
        className="w-full sm:w-8/12 md:w-2/3 lg:w-2/5 xl:w-1/3 2xl:w-2/5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <img
          src={data.image}
          alt="About Us"
          loading="lazy"
          className="w-full max-h-[400px] object-cover rounded-br-4xl rounded-tl-4xl shadow-[10px_10px_30px_rgba(0,0,0,0.15)]"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div 
        className="w-full lg:w-3/5 text-black font-['Roboto'] mt-6 lg:mt-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, margin: "-100px" }}
      >
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl xl:text-[32px] 2xl:text-4xl font-black mb-4 leading-tight"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          {data.title}
        </motion.h2>
        <motion.p 
          className="mb-3 text-sm sm:text-base md:text-lg xl:text-lg leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          {data.description1}
        </motion.p>
        <motion.p 
          className="text-sm sm:text-base md:text-lg xl:text-lg leading-relaxed"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          {data.description2}
        </motion.p>
      </motion.div>
    </div>
  );
};

const AboutUs = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-center xl:justify-around px-4 md:px-20 lg:px-14 2xl:px-36 my-10">
      {/* Text Content */}
      <div className="xl:w-1/2 w-full px-4 sm:px-8 lg:px-0 font-['Roboto']">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-black mb-5">
          {data.title}
        </h2>
        <p className="text-gray-900 mb-4 md:text-base lg:text-xl 2xl:text-2xl text-md leading-relaxed">
          {data.description1}
        </p>
        <p className="text-gray-900 md:text-base lg:text-xl 2xl:text-2xl text-md leading-relaxed">
          {data.description2}
        </p>
      </div>

      {/* Image */}
      <img
        src={data.image}
        alt="About Us"
        className="w-11/12 lg:w-1/2 xl:w-1/3 object-cover max-h-[500px] rounded-md shadow-2xl"
      />
    </div>
  );
};
export { Benefit, Banner, ShopAbout, AboutUs };
