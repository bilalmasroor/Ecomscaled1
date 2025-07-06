import React, { useEffect, useRef, useState } from "react";
import ModalForm from "./ModalForm";
import { Link } from "react-router-dom";

const VideoSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Handle play/pause on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch((err) => {
            console.error("Autoplay failed:", err);
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    const container = containerRef.current;
    if (container) observer.observe(container);

    return () => {
      if (container) observer.unobserve(container);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full px-4 py-12 flex flex-col justify-center items-center"
    >
      {/* Loader while video loads */}
      {isLoading && (
        <div className="w-full h-[200px] flex items-center justify-center bg-gray-900 rounded-lg">
          <div className="w-full h-full bg-gray-700 animate-pulse rounded-lg" />
        </div>
      )}

      {/* Video */}
      <video
        ref={videoRef}
        className={`lg:w-[80%] w-full mx-auto rounded-lg shadow-xl transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
          }`}
        src="https://res.cloudinary.com/daarlhxp1/video/upload/v1750735862/unjusrwylh7mqmjcnaay.mp4"
        autoPlay
        muted={false}
        playsInline
        controls={false}
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        onLoadedData={() => setIsLoading(false)}
      />
      <h1 className="md:text-3xl font-bold font-['Poppins'] text-center text-xl mt-14">Experience Excellence with Strategic Solutions</h1>
      <div className="md:mt-10 mt-8 flex font-['Roboto'] md:gap-7 gap-4 items-center ">
        <ModalForm bg_color="bg-[#0065b1]" title="Get Started" />
        <Link to="/contact" className="px-6 py-2 text-sm sm:text-base md:text-lg lg:text-xl rounded-full  border border-[#0065B1] hover:bg-[#0065b1] text-[#0065B1] hover:text-white duration-300" >Get A Quote</Link>
      </div>
    </section>
  );
};

export default VideoSection;
