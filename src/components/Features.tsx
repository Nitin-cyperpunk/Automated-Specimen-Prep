import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Settings, 
  Smartphone, 
  CheckCircle, 
  TrendingUp, 
  Cloud 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Vision",
    description: "Automatic material recognition (PVC/XLPE/HDPE), real-time dimensional analysis, and defect detection with 95% accuracy",
    highlight: "95% accuracy"
  },
  {
    icon: Settings,
    title: "Precision Hardware",
    description: "±0.1mm cutting precision with servo-controlled blade system and automated specimen handling",
    highlight: "±0.1mm precision"
  },
  {
    icon: Smartphone,
    title: "Smart Interface",
    description: "Web-based dashboard, mobile app control, and real-time monitoring for complete system oversight",
    highlight: "Real-time monitoring"
  },
  {
    icon: CheckCircle,
    title: "IS Compliance",
    description: "Automated IS 10810 & IS 7098 verification with digital certification and comprehensive audit trail generation",
    highlight: "100% compliant"
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Quality prediction models, intelligent maintenance scheduling, and continuous process optimization",
    highlight: "Predictive insights"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Remote monitoring capabilities, advanced data analytics, and multi-facility management platform",
    highlight: "Multi-facility ready"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Key Features Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI-powered solution for automated cable specimen preparation 
            with industry-leading precision and compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {feature.title}
                      </h3>
                      <span className="text-sm font-medium text-success">
                        {feature.highlight}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;