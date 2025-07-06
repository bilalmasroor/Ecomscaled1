import { Banner, Benefit, ShopAbout } from "../components/Banner";
import FullServiceSection from "../components/FullServiceSection";
import ScheduleConsultation from "../components/ScheduleConsultation";
import Testimonials from "../components/Testimonials";
import HowWeWorkTimeline from "../components/HowWeWorkTimeline";
import { assets } from "../assets/config";
import MobileAniamtion from "../components/MobileAniamtion";
import PricingSection from "../components/PricingSection";

const shopifyPlans = [
  {
    title: "Starter",
    items: [
      "Niche & product research",
      "Shopify store setup & theme configuration",
      "5 product listings with basic optimization",
      "Basic automation setup (email + order flow)",
      "1 revision round",
    ],
  },
  {
    title: "Growth",
    items: [
      "Everything in Starter",
      "Full product catalog upload (up to 25 SKUs)",
      "Advanced conversion-optimized design",
      "Email marketing + abandoned cart flows",
      "Meta & TikTok pixel setup",
      "Weekly performance check-ins",
    ],
  },
  {
    title: "Premium",
    items: [
      "Everything in Growth",
      "Full product catalog upload (50+ SKUs)",
      "Third-party app integration & automation",
      "Ad creatives + Meta & TikTok campaign setup",
      "A/B testing on product pages",
      "Dedicated success manager",
      "Monthly scaling strategy calls",
    ],
  },
];

const Shopify = () => {
  return (
    <div>
 <Banner desktop={assets.shopifyBanner} mobile={assets.shopifyMobile}  />
      <section className="bg-white text-gray-800 px-4 py-10 md:py-20">
        {/* Top Section */}
        <ShopAbout
          image=""
          data={{
            title: "Shopify Store Development",
            description1:
              "Think of your Shopify store as your brand’s home online. It’s the one place where you control the full experience — so it better feel good, look sharp, and be ridiculously easy to shop.",
            description2:
              "We don’t just design your store; we make sure it performs. From navigation and UX to apps and optimization, we set you up for long-term success.",
            image: assets.shopifyAbout,
            bg_color: "bg-[#605c5c]",
          }}
        />

        <Benefit
          main={
            "Benefits of launching Shopify Store Development with EcomScaled"
          }
          data={[
            {
              title: "A modern, mobile-friendly store",
              description:
                "Your store will look great and work flawlessly on every device, ensuring a smooth shopping experience for mobile users.",
            },
            {
              title: "Conversion-focused design with fast load times",
              description:
                "We design with purpose — clean layouts, clear CTAs, and lightning-fast performance to turn visitors into buyers.",
            },
            {
              title: "Full backend setup for easy management",
              description:
                "From product uploads to payment gateways, we handle the complete backend so you can manage your store with ease.",
            },
            {
              title: "Post-launch support if needed",
              description:
                "Even after launch, we’re here to help — offering support and guidance to keep your store running smoothly.",
            },
          ]}
        />
      </section>
      <HowWeWorkTimeline />

      <PricingSection
        title="Choose the right plan to scale your Shopify store"
        description="Whether you're launching, growing, or dominating the market — we have a package tailored for every stage."
        plans={shopifyPlans}
      />

      <FullServiceSection />
      <MobileAniamtion
        screenshots={[assets.shopify1, assets.shopify2, assets.shopify3]}
      />
      <ScheduleConsultation />
      <Testimonials />
    </div>
  );
};

export default Shopify;
