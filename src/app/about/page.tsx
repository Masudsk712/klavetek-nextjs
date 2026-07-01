import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutPremiumCompany from "@/components/sections/about/AboutPremiumCompany";
import MissionVision from "@/components/sections/about/MissionVision";
import ManagingDirector from "@/components/sections/about/ManagingDirector";
import PremiumTimeline from "@/components/sections/about/PremiumTimeline";
import LeadershipTeam from "@/components/sections/about/LeadershipTeam";
import CoreValues from "@/components/sections/about/CoreValues";
import AwardsCertifications from "@/components/sections/about/AwardsCertifications";
import PremiumCTA from "@/components/sections/about/PremiumCTA";

export const metadata = {
  title: "About Us | Klavetek",
  description:
    "Building Trust Through Innovation. Learn how Klavetek shapes sustainable construction across India.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutPremiumCompany />
        <MissionVision />
        <ManagingDirector />
        <PremiumTimeline />
        <LeadershipTeam />
        <CoreValues />
        <AwardsCertifications />
        <PremiumCTA />
      </main>
      <Footer />
    </>
  );
}