import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Documentation from "@/components/Documentation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background top-6">
      <Header />
      <main>
        <Hero />
        <ComparisonTable />
        <Features />
        <Architecture />
        <Documentation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
