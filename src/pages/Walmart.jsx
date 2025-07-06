import { Banner, Benefit, ShopAbout } from "../components/Banner";
import FullServiceSection from "../components/FullServiceSection";
import ScheduleConsultation from "../components/ScheduleConsultation";
import Testimonials from "../components/Testimonials";
import HowWeWorkTimeline from "../components/HowWeWorkTimeline";
import { assets } from "../assets/config";
import MobileAniamtion from "../components/MobileAniamtion";
import PricingSection from "../components/PricingSection";

const walmartPlans = [
  {
    title: "Starter",
    items: [
      "Walmart account creation & onboarding",
      "Product research & niche guidance",
      "10 optimized product listings",
      "Basic inventory sync & management",
      "Weekly performance reports",
    ],
  },
  {
    title: "Growth",
    items: [
      "Everything in Starter",
      "25 optimized product listings",
      "Supplier sourcing & integration",
      "Automated pricing tools",
    ],
  },
  {
    title: "Premium",
    items: [
      "Everything in Growth",
      "50+ high-converting product listings",
      "Full order processing + returns management",
      "Access to exclusive, vetted suppliers",
      "Dedicated account manager",
      "Priority support + monthly scaling sessions",
    ],
  },
];

const Walmart = () => {
  return (
    <div>
      <Banner desktop={assets.walmartBanner} mobile={assets.walmartMobile} />
      <section className="bg-white text-gray-800 px-4 py-10 md:py-20">
        {/* Top Section */}
        <ShopAbout
          image=""
          data={{
            title: "Walmart Marketplace Automation",
            description1:
              "Walmart is becoming a serious player in the e-commerce world, and getting in early can be a big win. But navigating the approval process, policies, and backend tools can feel like learning a new language. We simplify the process.",
            description2:
              " We help you get approved, list products properly, manage your pricing, and run ads that make sense. The best part? It’s still less competitive than Amazon — which means a better shot at visibility and sales..",
            image: assets.walmartAbout,
            bg_color: "bg-[#605c5c]",
          }}
        />

        {/* Benefits Section */}
        <Benefit
          main={
            "Benefits of launching Walmart Marketplace Services with EcomScaled"
          }
          data={[
            {
              title: "A compliant and fully set up Walmart store",
              description:
                "We ensure your Walmart store is set up correctly, following all compliance standards so you can start selling without delays.",
            },
            {
              title: "SEO-optimized listings with strategic pricing",
              description:
                "Product listings are fully optimized with high-ranking keywords and competitive pricing strategies to boost visibility and conversions.",
            },
            {
              title: "Competitive analysis for product positioning",
              description:
                "We analyze top competitors to position your products effectively, giving you a strong edge in a crowded marketplace.",
            },
            {
              title: "Insights and reporting to track sales",
              description:
                "Stay informed with clear, actionable reports that help you monitor performance and make smarter business decisions.",
            },
          ]}
        />
      </section>
      <HowWeWorkTimeline />
      <PricingSection
        title="Choose the right plan to scale your Walmart business"
        description="Whether you're launching, growing, or dominating the market — we have a package tailored for every stage."
        plans={walmartPlans}
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

export default Walmart;
