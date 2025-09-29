import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      category: "Speed",
      manual: "45 min / specimen",
      ai: "6 min / specimen",
      improvement: "87% faster"
    },
    {
      category: "Quality",
      manual: "1 in 4 rejected",
      ai: "1 in 100 rejected",
      improvement: "95% fewer rejects"
    },
    {
      category: "Documentation",
      manual: "Paper logbooks",
      ai: "Blockchain audit trail",
      improvement: "Digital compliance"
    },
    {
      category: "Precision",
      manual: "±0.5mm tolerance",
      ai: "±0.1mm precision",
      improvement: "5x more precise"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Manual vs AI-Powered Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the dramatic improvements when switching from manual to AI-automated specimen preparation
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x">
            <div className="p-6 bg-muted/30">
              <h3 className="font-semibold text-foreground mb-4">Process</h3>
            </div>
            <div className="p-6 bg-destructive/10">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <XCircle className="w-5 h-5 text-destructive mr-2" />
                Manual Today
              </h3>
            </div>
            <div className="p-6 bg-success/10">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-success mr-2" />
                With CablePrep AI
              </h3>
            </div>
            <div className="p-6 bg-primary/10">
              <h3 className="font-semibold text-foreground mb-4">Improvement</h3>
            </div>
          </div>

          {comparisons.map((comparison, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x border-t">
              <div className="p-4 font-medium text-foreground bg-muted/20">
                {comparison.category}
              </div>
              <div className="p-4 text-muted-foreground">
                {comparison.manual}
              </div>
              <div className="p-4 text-foreground font-medium">
                {comparison.ai}
              </div>
              <div className="p-4 text-primary font-semibold">
                {comparison.improvement}
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default ComparisonTable;