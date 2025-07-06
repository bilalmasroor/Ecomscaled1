// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { assets, services_image } from "../assets/config";

const services = [
  {
    title: "Amazon Automation",
    icon: services_image.amazon,
    small_icon: services_image.amazon_1,
    path: "/amazon",
  },
  {
    title: "Walmart Automation",
    icon: services_image.walmart,
    small_icon: services_image.walmart_1,
    path: "/walmart",
  },
  {
    title: "Shopify Automation",
    icon: services_image.shopify,
    small_icon: services_image.shopify_1,
    path: "/shopify",
  },

  {
    title: "TikTok Shop Automation",
    icon: services_image.tiktok,
    small_icon: services_image.tiktok_1,
    path: "/tiktok",
  },
  {
    title: "Performance Marketing",
    icon: services_image.ecommerce,
    small_icon: services_image.ecommerce_1,
    path: "/marketing",
  },
];

let navlink = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className=" bg-white shadow-md w-full">
      <div className="2xl:px-60 md:px-20 px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={assets.logo} alt="Logo" className="w-40 2xl:w-60" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-['Poppins'] font-semibold items-center text-lg">
          {navlink.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive ? "text-[#0065B1]" : "hover:text-[#0065B1]"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <div className="flex items-center gap-1 hover:text-[#0065B1] cursor-pointer">
              Services <ChevronDown className="mt-1" />
            </div>

            <div className="absolute top-8 -left-130 bg-[#1C1C1C] text-white p-4 rounded-lg shadow-lg flex gap-4 z-50 w-max max-w-[95vw] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
              {services.map((service, index) => (
                <NavLink
                  to={service.path}
                  key={index}
                  className="flex flex-col items-center justify-center bg-[#313232] transition-all p-3 rounded-md w-[135px] h-[135px]"
                >
                  <img
                    src={service.icon}
                    className="w-28 h-24 rounded-lg mb-2"
                    alt="icon"
                  />
                  <div className="flex items-center">
                    <img
                      src={service.small_icon}
                      className="size-5"
                      alt="icon"
                    />
                    <div className="w-0.5 h-5 bg-gray-100 mx-2"></div>
                    <span className="text-[10px] leading-tight">
                      {service.title}
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <Link
          to="/contact"
          className="bg-[#0065B1] hover:bg-white hover:text-[#0065b1]   border border-[#0065b1] duration-300 text-white 2xl:px-12 2xl:py-3 px-5 py-1.5 2xl:text-xl text-base md:block hidden rounded-full font-['Poppins']"
        >
          Contact Us
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white shadow-md">
          {navlink.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              onClick={() => setMobileMenu(false)}
              className={({ isActive }) =>
                isActive ? "text-[#0065B1]" : "hover:text-[#0065B1]"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Click to toggle mobile services */}
          <details className="text-[#0065B1]">
            <summary className="cursor-pointer text-lg font-medium">
              Services
            </summary>
            <div className="pl-4 flex flex-col md:flex-row gap-2 mt-2">
              {services.map((service, idx) => (
                <Link
                  onClick={() => setMobileMenu(false)}
                  to={service.path}
                  key={idx}
                  className="text-sm text-gray-700"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </details>

          <Link
            onClick={() => setMobileMenu(false)}
            to="/contact"
            className="bg-[#0065B1] hover:bg-white hover:text-[#0065b1]   border border-[#0065b1] duration-300 text-white text-center py-2 rounded-full"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
