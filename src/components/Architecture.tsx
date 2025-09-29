import { Card } from "@/components/ui/card";
import { ArrowRight, Camera, Brain, Settings, FileCheck } from "lucide-react";

const Architecture = () => {
  const systemFlow = [
    {
      icon: Camera,
      title: "Vision System",
      description: "High-resolution cameras capture cable specimens"
    },
    {
      icon: Brain,
      title: "AI Engine",
      description: "Deep learning models analyze material and dimensions"
    },
    {
      icon: Settings,
      title: "Hardware Control",
      description: "Precision servo motors execute cutting operations"
    },
    {
      icon: FileCheck,
      title: "Compliance Engine",
      description: "Automated verification against IS standards"
    }
  ];

  const techStack = [
    { name: "Python", color: "bg-blue-500" },
    { name: "TensorFlow", color: "bg-orange-500" },
    { name: "OpenCV", color: "bg-green-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "FastAPI", color: "bg-emerald-500" },
    { name: "Raspberry Pi", color: "bg-red-500" },
    { name: "Arduino", color: "bg-teal-500" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Architecture Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Intelligent system design combining computer vision, AI processing, 
            and precision hardware control
          </p>
        </div>

        {/* System Flow */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">System Workflow</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {systemFlow.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <Card className="p-6 text-center max-w-xs">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </Card>
                  
                  {index < systemFlow.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-muted-foreground mx-4 hidden lg:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-muted border"
              >
                <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;