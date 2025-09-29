import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComparisonTable from "@/components/ComparisonTable";
import Features from "@/components/Features";
import Architecture from "@/components/Architecture";
import Documentation from "@/components/Documentation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
<<<<<<< HEAD
import MeetTeam from "@/components/meetTeam";
=======
import Gallery from "@/components/Gallery";
>>>>>>> de6e50ef4915825c0aa3d35fdcdb82004a97e89b

const Index = () => {
  return (
    <div className="min-h-screen bg-background top-6">
      <Header />
      <main>
        <Hero />
        <ComparisonTable />
        <Features />
        <Architecture />
<<<<<<< HEAD
        <MeetTeam />
=======
        <Gallery />
>>>>>>> de6e50ef4915825c0aa3d35fdcdb82004a97e89b
        <Documentation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
