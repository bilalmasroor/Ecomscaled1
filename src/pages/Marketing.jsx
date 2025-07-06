import { Banner, Benefit, ShopAbout } from "../components/Banner";
import { assets } from "../assets/config";
import HowWeWorkTimeline from "../components/HowWeWorkTimeline";
import FullServiceSection from "../components/FullServiceSection";
import ScheduleConsultation from "../components/ScheduleConsultation";
import Testimonials from "../components/Testimonials";
import MobileAniamtion from "../components/MobileAniamtion";
import PricingSection from "../components/PricingSection";
const performancePlans = [
  {
    title: "Starter",
    items: [
      "Ad account setup (Meta or TikTok)",
      "1 campaign with 2 ad sets",
      "3 ad creatives (static/video)",
      "Basic audience targeting",
      "Weekly reporting",
      "Budget recommendation",
    ],
  },
  {
    title: "Growth",
    items: [
      "Everything in Starter",
      "Up to 3 active campaigns (Meta + TikTok)",
      "6 custom creatives (UGC/static/video)",
      "Retargeting setup",
      "Funnel-based audience strategy",
      "Bi-weekly performance reviews & optimization",
      "Conversion event tracking (Pixel + API)",
    ],
  },
  {
    title: "Premium",
    items: [
      "Everything in Growth",
      "Daily ad optimization & scaling",
      "A/B creative testing + hooks/angles",
      "Full-funnel setup (awareness to conversion)",
      "Email/SMS integration for remarketing",
      "Custom performance dashboard",
      "Dedicated ad strategist",
      "Weekly growth calls",
    ],
  },
];

const Marketing = () => {
  return (
    <div>
      <Banner desktop={assets.marketingBanner} mobile={assets.marketMobile} />
      <section className="bg-white text-black font-['Poppins'] px-4 py-10 md:py-20">
        <ShopAbout
          image=""
          data={{
            title: "Performance Marketing",
            description1:
              "Running ads without strategy is like lighting money on fire. We help you build campaigns that aren’t just pretty — they’re profitable.",
            description2:
              "Whether it’s Meta,TikTok, email flows, or a full funnel strategy — we build it around your brand, product, and audience. No templates. No guesswork.",
            image: assets.marketAbout,
            bg_color: "bg-[#605c5c]",
          }}
        />

        {/* Benefits Section */}
        <Benefit
          main={"Benefits of Performance Marketing Services with EcomScaled"}
          data={[
            {
              title: "Fully managed ad campaigns (Meta and TikTok)",
              description:
                "We handle your paid ads across all major platforms — from strategy to optimization — to drive traffic and boost conversions.",
            },
            {
              title: "Email + SMS flows for retention and re-engagement",
              description:
                "Automated, high-converting email and SMS campaigns keep your audience engaged, bringing them back to buy again.",
            },
            {
              title:
                "Analytics dashboards and KPIs you can actually understand",
              description:
                "Get simple, visual dashboards with real-time insights — no fluff, just clear data that drives smart decisions.",
            },
            {
              title: "Clear feedback on what’s working and what’s not",
              description:
                "We don’t just report numbers — we explain what’s driving results and what needs fixing, so you stay in control.",
            },
          ]}
        />
      </section>
      <HowWeWorkTimeline />
      <PricingSection
        title="Choose the right plan to scale your Performance Marketing"
        description="Whether you're launching, growing, or dominating the market — we have a package tailored for every stage."
        plans={performancePlans}
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

export default Marketing;
