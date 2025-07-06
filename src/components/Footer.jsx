import React from "react";
import {
  Instagram,
  Phone,
  Mail,
  Linkedin,
  Facebook,
  MapPin,
} from "lucide-react";
import { assets } from "../assets/config";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A1B1D] font-['Poppins'] text-white  px-4 md:px-20 pt-10 text-sm">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto border-b border-white/10 pb-10 flex flex-col md:flex-row gap-10">
        {/* Left Column */}
        <div className="flex font-['Roboto'] flex-wrap gap-20 justify-between w-full">
        <div className="space-y-4">
          <Link to="/" onScroll={() => scrollTo(0, 0)}>
            <img src={assets.whitelogo} alt="ECOMSCALED" className="w-60" />
          </Link>
          <p className="text-gray-300 md:text-lg mt-5 2xl:text-lg">
            scale smarter. sell bigger.
          </p>
          <div className="flex items-center gap-3 mt-8">
            <Link
              target="_blank"
              to="https://www.facebook.com/share/1Af2etXusx/?mibextid=wwXIfr"
              className="h-12 w-12 flex items-center justify-center rounded-full border"
            >
              <Facebook size={20} />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/ecom.scaled?igsh=MXBwd3czdTlibTNpeA=="
              className="h-12 w-12 flex items-center justify-center rounded-full border"
            >
              <Instagram size={20} />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/posts/ecomscaled_marketing-ecomscaled-activity-7344089028381585409-4BQp?utm_source=share&utm_medium=member_ios&rcm=ACoAAEETmt8BTs1VKxobZZqn5RHIHhQG7o_zlK8"
              className="h-12 w-12 flex items-center justify-center rounded-full border"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        
          <div className="flex flex-col space-y-4 text-base md:text-lg min-w-[140px]">
            <Link
              onClick={() => scrollTo(0, 0)}
              to="/"
              className="hover:translate-x-1 duration-300 font-semibold flex items-center gap-1"
            >
              <img src={assets.arrow} alt="home" /> Home
            </Link>
            <Link
              onClick={() => scrollTo(0, 0)}
              to="/contact"
              className="hover:translate-x-1 duration-300 font-semibold flex items-center gap-1"
            >
              <img src={assets.arrow} alt="contact" /> Free Consultation
            </Link>
            <Link
              onClick={() => scrollTo(0, 0)}
              to="/about"
              className="hover:translate-x-1 duration-300 font-semibold flex items-center gap-1"
            >
              <img src={assets.arrow} alt="" /> About us
            </Link>
          </div>

          <div className="md:space-y-4 space-y-2 text-base md:text-lg min-w-[140px]">
            <Link
              to="/amazon"
              onClick={() => scrollTo(0, 0)}
              className="hover:translate-x-1 duration-300 font-semibold  flex items-center gap-1"
            >
              <img src={assets.arrow} alt="" /> Amazon
            </Link>
            <Link
              to="/tiktok"
              onClick={() => scrollTo(0, 0)}
              className="hover:translate-x-1 duration-300 font-semibold flex items-center gap-1"
            >
              <img src={assets.arrow} alt="" /> Tiktok Shop
            </Link>
            <Link
              to="/walmart"
              onClick={() => scrollTo(0, 0)}
              className="hover:translate-x-1 duration-300 font-semibold flex items-center gap-1"
            >
              <img src={assets.arrow} alt="" /> Walmart
            </Link>
            <Link
              to="/shopify"
              onClick={() => scrollTo(0, 0)}
              className="hover:translate-x-1 duration-300 font-semibold flex items-center gap-1"
            >
              <img src={assets.arrow} alt="" /> Shopify
            </Link>
            <Link
              to="/marketing"
              onClick={() => scrollTo(0, 0)}
              className="hover:translate-x-1 duration-300 font-semibold flex items-center gap-1"
            >
              <img src={assets.arrow} alt="" /> Marketing
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-7xl mx-auto mt-8 flex flex-col 2xl:gap-5 gap-8 lg:flex-row md:items-center md:justify-between">
        {/* Logos */}

        <div className="flex flex-wrap gap-3 lg:justify-center">
          <img
            src={assets.fooAmazon}
            alt="Amazon"
            className="h-16 w-20 2xl:h-24 2xl:w-32 md:h-20 md:w-24"
          />
          <img
            src={assets.fooShopify}
            alt="Shopify"
            className="h-16 w-20 2xl:h-24 2xl:w-32 md:h-20 md:w-24"
          />
          <img
            src={assets.fooTiktok}
            alt="Tiktok"
            className="h-16 w-20 2xl:h-24 2xl:w-32 md:h-20 md:w-24"
          />
          <img
            src={assets.fooWalmart}
            alt="Walmart"
            className="h-16 w-20 2xl:h-24 2xl:w-32 md:h-20 md:w-24"
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start gap-2">
          <p className="flex items-center gap-2 text-lg">
            <Phone className="text-[#0065B1] size-5" /> +1(908)315-0277
          </p>
          <a
            href="mailto:hello@ecomscaled.com"
            className="flex items-center gap-2 text-lg text-white hover:text-[#0065B1] transition-colors"
          >
            <Mail className="text-[#0065B1] size-5" /> contact@ecomscaled.com
          </a>
          <div className="gap-2 text-white text-lg font-normal flex items-center">
            <MapPin className="text-[#0065B1] size-5" />
            Plainsfield New Jersey
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-white py-6 font-normal text-sm">
        © <span className="text-[#0065B1]">Ecomscaled.</span> All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
