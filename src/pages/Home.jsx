import HeroSection from "../components/HeroSection";
import PartnerSection from "../components/PartnerSection";
import FullServiceSection from "../components/FullServiceSection";
import HowWeWorkTimeline from "../components/HowWeWorkTimeline";
import ScheduleConsultation from "../components/ScheduleConsultation";
import Testimonials from "../components/Testimonials";
import VideoSection from "../components/VideoSection";
import MobileAniamtion from "../components/MobileAniamtion";
import { assets } from "../assets/config";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <PartnerSection />
      <VideoSection />
      <FullServiceSection />
      <HowWeWorkTimeline />
      <MobileAniamtion
        screenshots={[
          assets.slider2,
          assets.slider1,
          assets.slider3,
          assets.slider4,
        ]}
      />
      <ScheduleConsultation />
      <Testimonials />
    </div>
  );
};

export default Home;
