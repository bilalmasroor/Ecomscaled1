import { assets } from "../assets/config";

const FlipCard = ({ title, description }) => {
  return (
    <div className="w-full font-['Roboto'] rounded-bl-2xl rounded-se-2xl rounded-ss-2xl shadow-xl h-66 md:h-68 lg:h-70 xl:h-72 2xl:h-74 perspective">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white shadow-md rounded-bl-2xl rounded-se-2xl rounded-ss-2xl flex flex-col p-5">
          <img
            src={assets.automation}
            className="mb-3 w-[72px] 2xl:w-20 flex-shrink-0"
          />
          <h3 className="text-base lg:text-[19px] 2xl:text-xl font-semibold text-black mb-2 flex-shrink-0 leading-tight">
            {title}
          </h3>
          <p className="text-sm xl:text-md 2xl:text-base text-gray-900 flex-grow overflow-hidden">
            {description}
          </p>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-[#0065B1] text-white rounded-bl-2xl rounded-se-2xl rounded-ss-2xl transform rotate-y-180 flex flex-col p-5">
          <img
            src={assets.automation}
            className="mb-3 filter brightness-0 w-[72px] 2xl:w-20 flex-shrink-0 invert"
          />
          <h3 className="text-base lg:text-[19px] 2xl:text-xl font-semibold mb-2 flex-shrink-0 leading-tight">
            {title}
          </h3>
          <p className="text-sm xl:text-md 2xl:text-base flex-grow overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
