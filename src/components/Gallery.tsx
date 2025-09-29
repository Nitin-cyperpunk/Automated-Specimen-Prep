import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  {
    src: "/images/breadboard-setup.jpg",
    title: "Electronics Wiring",
    caption: "ESP32 + A4988 drivers, OLED, and 12V power layout.",
  },
  {
    src: "/images/mechanical-drawing.jpg",
    title: "Mechanical Layout",
    caption: "Board-level dimensions and mounting blueprint (mm).",
  },
  {
    src: "/images/ui-and-cutter.jpg",
    title: "UI and Cutter",
    caption: "On-device OLED controls and automated stripping action.",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Build Gallery</h2>
        <p className="mt-2 text-muted-foreground">
          Highlights from the electronics, mechanical design, and user interface.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.title} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={item.src}
                alt={item.title}
                className="h-56 w-full rounded-md object-cover"
                loading="lazy"
              />
              <p className="mt-3 text-sm text-muted-foreground">{item.caption}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/*
        Place the three images in the public/images directory with these filenames:
        - public/images/breadboard-setup.jpg
        - public/images/mechanical-drawing.jpg
        - public/images/ui-and-cutter.jpg
      */}
    </section>
  );
};

export default Gallery;


