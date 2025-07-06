import { Banner, Benefit, ShopAbout } from "../components/Banner";
import Testimonials from "../components/Testimonials";
import ScheduleConsultation from "../components/ScheduleConsultation";
import FullServiceSection from "../components/FullServiceSection";
import HowWeWorkTimeline from "../components/HowWeWorkTimeline";
import { assets } from "../assets/config";
import MobileAniamtion from "../components/MobileAniamtion";
import PricingSection from "../components/PricingSection";
const tiktokPlans = [
  {
    title: "Starter",
    items: [
      "TikTok Shop registration & onboarding",
      "Basic product listing (up to 10 SKUs)",
      "Branded storefront design",
      "TikTok Seller Center training",
      "Basic keyword optimization",
      "1 product video concept",
    ],
  },
  {
    title: "Growth",
    items: [
      "Everything in Starter",
      "25 fully optimized product listings",
      "TikTok affiliate setup & onboarding",
      "3 TikTok product videos (UGC-style or branded)",
      "Performance-based content strategy",
      "Weekly sales insights & adjustments",
    ],
  },
  {
    title: "Premium",
    items: [
      "Everything in Growth",
      "Full catalog upload (50+ SKUs)",
      "Influencer outreach & product seeding",
      "TikTok Ads setup + scaling strategy",
      "Daily order & affiliate management",
      "5 video creatives/month + trend-based content calendar",
      "Dedicated TikTok Shop strategist",
    ],
  },
];
const TikTok = () => {
  return (
    <div>
 <Banner desktop={assets.tiktokBanner} mobile={assets.tiktokMobile}  />
      <section className="bg-white text-gray-800 px-4 py-10 md:py-20">
        {/* Top Section */}

        <ShopAbout
          image=""
          data={{
            title: "TikTok Shop Automation",
            description1:
              "TikTok Shop is where content meets commerce — and it's exploding. If you’ve got a product with visual appeal or trending potential, we can help you tap into TikTok’s massive user base without the stress of setting up or running it alone.",
            description2:
              "We’ll handle the store setup, connect you with creators, manage your orders, and track your performance — so you can stay focused on growing your brand.",
            image: assets.tiktokAbout,
            bg_color: "bg-[#605c5c]",
          }}
        />

        {/* Benefits Section */}
        <Benefit
          main={
            "Benefits of launching TikTok Shop Automation Services with EcomScaled"
          }
          data={[
            {
              title: " A working TikTok Shop in days, not weeks",
              description:
                "We launch your TikTok Shop fast — fully set up and ready to sell within days, so you don’t miss out on trends.",
            },
            {
              title: "Ongoing creator management and video content support",
              description:
                "From finding the right creators to managing content, we handle it all to keep your brand active and engaging on TikTok.",
            },
            {
              title: "Order tracking and delivery integration",
              description:
                "Seamless integration with order tracking and delivery systems ensures a smooth shopping experience for your customers.",
            },
            {
              title: "Strategy to go viral and stay visible",
              description:
                "We craft data-backed content strategies to help your brand go viral and maintain visibility in TikTok’s fast-paced ecosystem.",
            },
          ]}
        />
      </section>
      <HowWeWorkTimeline />
      <PricingSection
        title="Choose the right plan to scale your TikTok Shop"
        description="Whether you're launching, growing, or dominating the market — we have a package tailored for every stage."
        plans={tiktokPlans}
      />
      <FullServiceSection />
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

export default TikTok;
