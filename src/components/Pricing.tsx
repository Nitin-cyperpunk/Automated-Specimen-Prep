import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Maker",
      price: "Free",
      period: "",
      description: "Perfect for testing and small-scale operations",
      specimens: "≤3k specimens",
      features: [
        "Community forum support",
        "Basic AI models",
        "Standard documentation",
        "Email updates"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$499",
      period: "/month",
      description: "Ideal for growing labs and manufacturers",
      specimens: "50k specimens",
      features: [
        "Email support",
        "Advanced AI models",
        "API access",
        "Custom reports",
        "Cloud backup",
        "Priority updates"
      ],
      cta: "Start Trial",
      popular: true
    },
    {
      name: "Plant",
      price: "$2,999",
      period: "/month",
      description: "Full-scale manufacturing operations",
      specimens: "Unlimited specimens",
      features: [
        "99.5% SLA",
        "Phone support",
        "Multi-facility management",
        "Custom integrations",
        "White-label options",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Complete on-premises solution",
      specimens: "Unlimited + on-prem",
      features: [
        "On-premises deployment",
        "Full customization",
        "Legal indemnification",
        "24/7 support",
        "Training programs",
        "Implementation consulting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Pricing & Licensing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your cable testing needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`p-6 relative ${tier.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                  <p className="text-sm font-medium text-primary mt-1">{tier.specimens}</p>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-success mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : 'variant-outline'}`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  {tier.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            OEM hardware bundles (camera + Pi + sensors) from $1,299
          </p>
          <Button variant="ghost" className="text-accent">
            View Hardware Bundles →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;