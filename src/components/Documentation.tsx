import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Settings, 
  Monitor, 
  BookOpen, 
  Code2, 
  FileCheck,
  ArrowRight
} from "lucide-react";

const documentationSections = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "System requirements, installation guide, first setup, and quick tutorial",
    items: ["System Requirements", "Installation Guide", "First Setup", "Quick Tutorial"],
    color: "bg-blue-500"
  },
  {
    icon: Settings,
    title: "Hardware Setup", 
    description: "Components list, assembly instructions, wiring diagrams, and calibration guide",
    items: ["Components List", "Assembly Instructions", "Wiring Diagrams", "Calibration Guide"],
    color: "bg-orange-500"
  },
  {
    icon: Monitor,
    title: "Software Configuration",
    description: "Environment setup, AI model training, dashboard configuration, and API integration",
    items: ["Environment Setup", "AI Model Training", "Dashboard Configuration", "API Integration"],
    color: "bg-green-500"
  },
  {
    icon: BookOpen,
    title: "User Manual",
    description: "Operating procedures, safety guidelines, troubleshooting, and maintenance schedule",
    items: ["Operating Procedures", "Safety Guidelines", "Troubleshooting", "Maintenance Schedule"],
    color: "bg-purple-500"
  },
  {
    icon: Code2,
    title: "Developer Guide",
    description: "Architecture overview, API documentation, custom integrations, and contributing guidelines",
    items: ["Architecture Overview", "API Documentation", "Custom Integrations", "Contributing Guidelines"],
    color: "bg-cyan-500"
  },
  {
    icon: FileCheck,
    title: "Standards Compliance",
    description: "IS 10810 requirements, IS 7098 specifications, certification process, and quality assurance",
    items: ["IS 10810 Requirements", "IS 7098 Specifications", "Certification Process", "Quality Assurance"],
    color: "bg-emerald-500"
  }
];

const Documentation = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Documentation Sections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive guides covering every aspect of CablePrep AI system 
            implementation, operation, and maintenance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {section.description}
                  </p>

                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="ghost" 
                    className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Explore Section
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <BookOpen className="w-5 h-5 mr-2" />
            View Complete Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Documentation;