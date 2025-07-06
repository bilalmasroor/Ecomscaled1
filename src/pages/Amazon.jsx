import { Banner, Benefit, ShopAbout } from "../components/Banner";
import FullServiceSection from "../components/FullServiceSection";
import ScheduleConsultation from "../components/ScheduleConsultation";
import Testimonials from "../components/Testimonials";
import HowWeWorkTimeline from "../components/HowWeWorkTimeline";
import { assets } from "../assets/config";
import MobileAniamtion from "../components/MobileAniamtion";
import PricingSection from "../components/PricingSection";

const amazonPlans = [
  {
    title: "Starter",
    items: [
      "Product research & niche selection",
      "Account setup assistance",
      "Storefront branding & listing creation",
      "Basic inventory & order management support",
      "Weekly progress updates",
    ],
  },
  {
    title: "Growth",
    items: [
      "Everything in Starter",
      "Advanced product sourcing",
      "Automated pricing & stock sync",
      "Monthly performance reviews",
      "Access to curated supplier network",
    ],
  },
  {
    title: "Premium",
    items: [
      "Everything in Growth",
      "Full account management",
      "Order processing & returns handled",
      "Premium supplier integration",
      "Dedicated account manager",
      "Priority support + 24/7 dashboard access",
    ],
  },
];

const Amazon = () => {
  return (
    <div>
      <Banner desktop={assets.amazonBanner} mobile={assets.amazonMobile}  />
      <section className="bg-white text-black font-['Poppins'] px-4 py-10 md:py-20">
        <ShopAbout
          image=""
          data={{
            title: "Amazon Service Automation",
            description1:
              "Selling on Amazon goes way beyond uploading a few product images and writing a description. It’s about understanding the algorithm, optimizing every touchpoint, and building a brand that stands out in a sea of sellers. That’s exactly what we help you do.",
            description2:
              "We take care of your listings, visuals, ads, FBA logistics, and customer reviews — and we keep you in the loop with clear updates and data. Whether you’re a first-time seller or trying to take your store to the next level, we work with you to build something sustainable and scalable.",
            image: assets.amazonAbout,
            bg_color: "bg-[#605c5c]",
          }}
        />

        {/* Benefits Section */}
        <Benefit
          main={
            "Benefits of launching amazon Account & Listing Management Services with EcomScaled"
          }
          data={[
            {
              title: "A fully optimized Amazon storefront",
              description:
                "We design your storefront to reflect your brand and boost customer trust, leading to higher engagement and sales.",
            },
            {
              title: "High-converting product pages",
              description:
                "Each product page is crafted with compelling copy, optimized images, and strategic SEO to drive conversions.",
            },
            {
              title: "Strategic advertising campaigns",
              description:
                "From Sponsored Ads to DSP, we manage data-driven campaigns that deliver measurable ROI and scalable growth.",
            },
            {
              title: "Inventory and fulfillment support",
              description:
                "Never go out of stock or overspend. We streamline your inventory and fulfillment to match demand and reduce waste.",
            },
          ]}
        />
      </section>
      <HowWeWorkTimeline />
      <PricingSection
        title="Choose the right plan to scale your Amazon business"
        description="Whether you're launching, growing, or dominating the market — we have a package tailored for every stage."
        plans={amazonPlans}
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

export default Amazon;
