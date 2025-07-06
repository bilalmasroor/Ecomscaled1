import { useState, useEffect } from "react";
import { cardData } from "../assets/config";
import { useNavigate, useLocation } from "react-router-dom";
import FlipCard from "./FlipCard ";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FullServiceSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const headings = Object.keys(cardData);

  const pathToCategory = {
    "/amazon": "Amazon Automation",
    "/tiktok": " TikTok Shop Automation",
    "/walmart": " Walmart Automation",
    "/shopify": " Shopify Automation",
    "/marketing": "Performance Marketing",
  };

  const currentPath = location.pathname;
  const defaultHeading = pathToCategory[currentPath] || headings[0];
  const isFilteredPage = Object.keys(pathToCategory).includes(currentPath);

  const [active, setActive] = useState(defaultHeading);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setActive(defaultHeading);
  }, [defaultHeading]);

  useEffect(() => {
    setCurrentIndex(0); // reset mobile slider when tab changes
  }, [active]);

  return (
    <div className="w-full bg-gray-100 px-5 md:px-14 xl:px-24 2xl:px-36 py-8 my-10">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center my-8">
        Our Core Services
      </h2>

      {/* Tabs only on main page */}
      {!isFilteredPage && (
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {headings.map((heading) => (
            <button
              key={heading}
              onClick={() => setActive(heading)}
              className={`px-4 py-2 rounded-full text-sm md:text-base lg:text-lg 2xl:text-xl cursor-pointer font-semibold font-['Roboto'] transition-all duration-300 ${
                active === heading
                  ? "text-[#0065B1] underline"
                  : "text-gray-900"
              }`}
            >
              {heading}
            </button>
          ))}
        </div>
      )}

      {/* Desktop Grid */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 2xl:gap-6 max-w-7xl mx-auto">
        {cardData[active].map((item, idx) => (
          <div key={idx} className="w-full">
            <FlipCard title={item.title} description={item.description} />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden w-full flex flex-col items-center relative overflow-hidden mt-6">
        <div
          className="w-full flex transition-transform duration-500 "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cardData[active].map((item, idx) => (
            <div key={idx} className="min-w-full px-6">
              <FlipCard title={item.title} description={item.description} />
            </div>
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? cardData[active].length - 1 : prev - 1
              )
            }
            className="p-2 bg-[#0065B1] text-white rounded"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === cardData[active].length - 1 ? 0 : prev + 1
              )
            }
            className="p-2 bg-[#0065B1] text-white rounded"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Contact Button */}
      <div className="flex justify-center mt-10">
        <button
          className="bg-[#0065B1] duration-300 font-['Roboto'] text-white px-6 py-2 2xl:px-20 lg:px-11 lg:py-3.5 lg:text-xl 2xl:py-5 rounded-full hover:bg-transparent border border-[#0065B1] hover:text-[#0065B1]"
          onClick={() => {
            navigate("/contact");
            scrollTo(0, 0);
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FullServiceSection;
