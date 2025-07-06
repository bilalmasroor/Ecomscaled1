import { assets } from "../assets/config";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const imageAnimation = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      delay: 0.2
    } 
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: 'easeOut',
      delay: 0.1
    } 
  }
};

// Hero section animation variants
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

const About = () => {
  const aboutCard = [
    {
      title: "We Commit",
      description:
        "Our team of specialists is committed to producing the best results in order to make your product a success.",
      image: assets.commitment,
    },
    {
      title: "We Research",
      description:
        "Our experts know how important market research is. No work is done without extensive research of market trends.",
      image: assets.research,
    },
    {
      title: "We Deliver",
      description:
        "The quality of our work and your time are both of tremendous importance to us. We deliver the best results promptly!",
      image: assets.deliver,
    },
  ];

  return (
    <div>
      {/* Hero Section with animations */}
      <motion.div 
        className="aboutHero md:h-[80vh] h-[50vh] flex flex-col items-center justify-center"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl 2xl:text-8xl font-bold font-['Poppins'] text-center"
          variants={heroTextVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          About Us
        </motion.h1>
      </motion.div>

      {/* About Us Section (text fades in from left, image static) */}
      <section className="bg-white text-black py-12">
        <div className="max-w-6xl mx-auto lg:flex lg:items-center lg:gap-12 px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Text Column */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="text-4xl font-bold">About Us</h2>
            <p>
              We started Ecomscaled with one goal — to make growth in e-commerce less messy. We've worked behind the scenes with small brands and scaling stores alike, and one thing's clear: success happens when tech, timing, and creativity work together.
            </p>
            <p>
              We're not just service providers. We're partners who care about where your brand is going. Whether you're stuck at the setup phase or trying to break into new platforms, our job is to make the process clearer, faster, and easier for you.
            </p>
          </motion.div>

          {/* Image Column (static) */}
          <div className="w-full sm:w-10/12 lg:w-1/2 xl:w-1/3 px-4 md:px-0">
            <img
              src={assets.aboutSection}
              alt="About Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Cards (static) */}
        <div className="mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8  bg-[#0065b1] text-white px-4 sm:px-6 md:px-10 lg:px-16 py-10">
          {aboutCard.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start font-['Poppins'] px-10 sm:px-0 text-left"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-24 h-24 flex items-center justify-center sm:w-28 sm:h-28 lg:w-32 lg:h-32 2xl:w-40 2xl:h-40 lg:-mt-28 bg-[#0065b1] rounded-full mb-4 border-4 border-white"
                variants={imageAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover="hover"
              >
                <img src={item.image} className="w-2/3" alt={item.title} />
              </motion.div>
              <h3 className="text-lg sm:text-xl lg:text-3xl 2xl:text-5xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-md lg:text-lg 2xl:text-xl text-white">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section (image static, text fades in from right) */}
      <div className="flex flex-col justify-around lg:flex-row items-center lg:items-start gap-12 lg:gap-20 px-4 sm:px-6 md:px-10 lg:px-16 mt-16 mb-28">
        {/* Image Column (static) */}
        <div className="w-full sm:w-10/12 lg:w-1/2 xl:w-1/3 px-4 md:px-0">
          <img
            src={assets.corevalue}
            alt="Core Values"
            loading="lazy"
            className="w-full max-h-[500px] object-cover rounded-br-4xl rounded-tl-4xl shadow-[10px_10px_30px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* Text Column */}
        <motion.div
          className="w-full lg:w-1/2 sm:w-10/12 font-['Poppins'] px-4 md:px-0"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black mb-6 leading-tight">
            Core Values
          </h2>
          <ul className="space-y-4">
            <li>
              <span className="font-bold block">Transparency:</span> No fine print, no empty buzzwords.
            </li>
            <li>
              <span className="font-bold flex items-center gap-2">
                Execution <ChevronRight size={20} /> Excuses:
              </span> We get things done.
            </li>
            <li>
              <span className="font-bold block">Clarity:</span> You'll always know what's working and why.
            </li>
            <li>
              <span className="font-bold block">Growth Mindset:</span> We don't just follow trends — we build with intent.
            </li>
            <li>
              <span className="font-bold block">People First:</span> Relationships matter more than algorithms.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* What Makes Us Different (text fades in from left, image static) */}
      <section className="bg-[#0065b1] text-white py-16">
        <div className="max-w-6xl mx-auto lg:flex lg:items-center lg:gap-12 px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Text Column */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="text-4xl font-bold">What Makes Us Different</h2>
            <p>
              We take time to understand your business. We don't just throw ads and apps at the problem — we offer solutions that fit. Our services are collaborative, strategic, and focused on long-term results. We treat your brand like it's our own.
            </p>
          </motion.div>

          {/* Image Column (static) */}
          <div className="w-full sm:w-10/12 lg:w-1/2 xl:w-1/3 px-4 md:px-0">
            <img
              src={assets.businessGrowth}
              alt="What Makes Us Different"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
