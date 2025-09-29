import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Documentation from "@/components/Documentation";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ComparisonTable />
        <Features />
        <Architecture />
        <Documentation />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
