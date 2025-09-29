"use client";

import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ArrowRight, Camera, Brain, Settings, FileCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Architecture = () => {
  const systemRef = useRef(null);
  const techRef = useRef(null);

  const systemFlow = [
    {
      icon: Camera,
      title: "Vision System",
      description: "High-resolution cameras capture cable specimens",
    },
    {
      icon: Brain,
      title: "AI Engine",
      description: "Deep learning models analyze material and dimensions",
    },
    {
      icon: Settings,
      title: "Hardware Control",
      description: "Precision servo motors execute cutting operations",
    },
    {
      icon: FileCheck,
      title: "Compliance Engine",
      description: "Automated verification against IS standards",
    },
  ];

  const techStack = [
    { name: "Python", logo: "https://www.python.org/static/community_logos/python-logo.png" },
    { name: "TensorFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
    { name: "OpenCV", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg" },
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
    { name: "FastAPI", logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" },
    { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
    { name: "Raspberry Pi", logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Raspberry_Pi_Logo.svg" },
    { name: "Arduino", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg" },
  ];

  useEffect(() => {
    if (systemRef.current) {
      gsap.from(systemRef.current.querySelectorAll(".workflow-card"), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: systemRef.current,
          start: "top 80%",
        },
      });
    }

    if (techRef.current) {
      gsap.from(techRef.current.querySelectorAll(".tech-item"), {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Architecture Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Intelligent system design combining computer vision, AI processing,
            and precision hardware control
          </p>
        </div>

        {/* System Workflow */}
        <div ref={systemRef} className="mb-20">
          <h3 className="text-2xl font-semibold text-foreground mb-10 text-center">
            System Workflow
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {systemFlow.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-center workflow-card">
                  <Card className="p-6 text-center max-w-xs shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
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
        <div ref={techRef} className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-10">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-item flex items-center space-x-3 px-5 py-3 rounded-xl bg-muted border shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-7 h-7 object-contain"
                />
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
