import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Documentation from "@/components/Documentation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MeetTeam from "@/components/meetTeam";
import Gallery from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background top-6">
      <Header />
      <main>
        <Hero />
        <ComparisonTable />
        <Features />
        <Architecture />
        <MeetTeam />
        <Gallery />
        <Documentation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
