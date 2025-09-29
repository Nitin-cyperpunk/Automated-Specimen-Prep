import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Play, FileText, Zap } from "lucide-react";
import heroImage from "@/assets/hero-machine.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
      },
    });

    tl.from(heroRef.current.querySelectorAll(".animate-hero"), {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    tl.from(heroRef.current.querySelectorAll(".animate-stats"), {
      opacity: 0,
      scale: 0.95,
      stagger: 0.2,
      duration: 0.6,
      ease: "power2.out",
    });
  }, []);

  return (
    <section ref={heroRef} className="relative py-20 overflow-hidden">
      {/* Background Gradient + Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <canvas id="heroParticles" className="absolute inset-0"></canvas>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-hero">
            {/* Tagline */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success/10 text-success border border-success/20 animate-hero">
              🧠 From manual chaos to AI-driven compliance in 30 minutes
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight animate-hero">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Testing Process
              </span>{" "}
              with AI-Powered Precision
            </h1>

            {/* Subheading */}
            <p className="text-xl text-muted-foreground leading-relaxed animate-hero">
              <span className="font-semibold text-success">70% faster</span> •{" "}
              <span className="font-semibold text-accent">95% fewer rejects</span> •{" "}
              <span className="font-semibold text-primary">
                100% IS-10810 & IS-7098 compliant
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-hero">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                <Play className="w-5 h-5 mr-2" />
                Watch 90-sec Demo
              </Button>
              <Button size="lg" variant="ghost" className="text-accent hover:text-accent/90">
                <FileText className="w-5 h-5 mr-2" />
                View Documentation
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 animate-stats">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">6 min</div>
                <div className="text-sm text-muted-foreground">Per Specimen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">1 in 100</div>
                <div className="text-sm text-muted-foreground">Rejected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">±0.1mm</div>
                <div className="text-sm text-muted-foreground">Precision</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-card/30 dark:bg-gray-900/30 backdrop-blur-lg border rounded-lg p-6 mt-8 animate-hero">
              <p className="text-muted-foreground italic">
                "We prepared 2,000 XLPE dumbbells in one weekend with zero re-cuts."
              </p>
              <p className="text-sm font-medium text-foreground mt-2">
                — PolyCab R&D Manager
              </p>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-hero">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="CablePrep AI System in action showing automated cable specimen preparation"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card border rounded-lg p-4 shadow-lg backdrop-blur-md animate-hero">
              <div className="text-sm font-medium text-success">✓ IS 10810 Compliant</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border rounded-lg p-4 shadow-lg backdrop-blur-md animate-hero">
              <div className="text-sm font-medium text-primary">🤖 AI-Powered Vision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
