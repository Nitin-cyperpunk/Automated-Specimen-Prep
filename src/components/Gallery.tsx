import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    src: "/breadboard-setup.png",
    title: "Electronics Wiring",
    caption: "ESP32 + A4988 drivers, OLED, and 12V power layout.",
    info: "A clean schematic to power and control all hardware."
  },
  {
    src: "/mechanical-drawing.jpg",
    title: "Mechanical Layout",
    caption: "Board-level dimensions and mounting blueprint (mm).",
    info: "Precise mechanical design for efficient assembly."
  },
  {
    src: "/ui-and-cutter.png",
    title: "UI and Cutter",
    caption: "On-device OLED controls and automated stripping action.",
    info: "Intuitive UI for seamless control of the cutter."
  },
];

const Gallery = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: "#gallery",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      scale: 0.9,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <section id="gallery" className="container mx-auto px-4 py-12 mb-20">
      {/* Cool Heading */}
      <div className="mb-12 text-center relative z-10">
        <h2 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
          Build Gallery
        </h2>
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mt-2 animate-pulse"></div>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Explore highlights from electronics, mechanical design, and user interface.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Card
            key={item.title}
            ref={(el) => el && (cardsRef.current[index] = el)}
            className="relative overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
          >
            <CardHeader className="p-0">
              <CardTitle className="text-xl bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text px-4 pt-4">
                {item.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-md">
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                  <p className="text-white text-sm">{item.caption}</p>
                </div>
              </div>

              {/* Info below image */}
              <div className="px-4 py-2">
                <p className="text-sm text-muted-foreground">{item.info}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
