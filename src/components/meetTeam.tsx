import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Particles } from "react-tsparticles";
import { FaLinkedin, FaGlobe } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Bhavesh Patil",
    role: "Tech Lead",
    year: "3rd Year",
    department: "AIDS Department",
    tagline: "Building prototypes that push limits",
    image: "./src/assets/bhavesh.jpg",
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Nitin Singh",
    role: "AI/ML Lead",
    year: "4th Year",
    department: "Computer Department",
    tagline: "Turning data into intelligence",
    image: "./src/assets/nitin.jpg",
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Ajinkya Wagh",
    role: "App/UI Lead",
    year: "3rd Year",
    department: "Computer Department",
    tagline: "Designing experiences users love",
    image: `https://randomuser.me/api/portraits/men/23.jpg`,
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Gauri Ansune",
    role: "Designer/Project Manager",
    year: "4th Year",
    department: "Computer Department",
    tagline: "Organizing chaos into creativity",
    image: `https://randomuser.me/api/portraits/women/24.jpg`,
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Vaibhav Upadhyay",
    role: "Hardware/IoT Engineer",
    year: "3rd Year",
    department: "ENTC Department",
    tagline: "Connecting hardware with innovation",
    image: `https://randomuser.me/api/portraits/men/31.jpg`,
    linkedin: "#",
    portfolio: "#",
  },
  {
    name: "Hemangi Palke",
    role: "Pitch/Comms Lead",
    year: "2nd Year",
    department: "Computer Department",
    tagline: "Communicating ideas that inspire",
    image: `https://randomuser.me/api/portraits/women/26.jpg`,
    linkedin: "#",
    portfolio: "#",
  },
];

const MeetTeam = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate cards on scroll
    gsap.from(cardsRef.current, {
      scrollTrigger: {
        trigger: ".meet-team-section",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      scale: 0.8,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });

    // Hover + floating animation
    cardsRef.current.forEach((card, index) => {
      const border = document.createElement("div");
      border.className = "absolute inset-0 rounded-2xl pointer-events-none";
      card.appendChild(border);

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(card, {
          rotationY: (x / rect.width - 0.5) * 15,
          rotationX: -(y / rect.height - 0.5) * 15,
          transformPerspective: 1000,
          ease: "power1.out",
          duration: 0.3,
        });

        gsap.to(border, {
          boxShadow: `0 0 20px rgba(0,123,255,0.6), 0 0 40px rgba(0,123,255,0.4)`,
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotationY: 0, rotationX: 0, ease: "power1.out", duration: 0.5 });
        gsap.to(border, { boxShadow: "0 0 0px rgba(0,0,0,0)", duration: 0.5 });
      });

      // Floating glow animation
      gsap.to(card, {
        y: "+=10",
        boxShadow: "0px 10px 30px rgba(0,123,255,0.3)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 3 + index * 0.3,
      });
    });
  }, []);

  return (
    <section className="meet-team-section relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden bottom-10">
      {/* Particle Background */}
      <Particles
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { speed: 1 },
            line_linked: { enable: true, opacity: 0.15 },
            color: { value: "#00bfff" },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "repulse" } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12 relative z-20">
  <h2
    className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"
    style={{ animationDuration: "3s", animationIterationCount: "infinite" }}
  >
    Meet the Team
  </h2>

  <div className="mx-auto w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full mb-4 animate-pulse"></div>

  <p className="text-xl text-muted-foreground max-w-3xl mx-auto opacity-80">
    Our skilled team making innovation happen.
  </p>
</div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => el && (cardsRef.current[index] = el)}
              className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 cursor-pointer overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-52 h-52 md:w-60 md:h-60 rounded-xl mb-4 object-cover border-4 border-primary shadow-lg transition-transform duration-300"
              />

              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-muted-foreground text-sm mt-1">{member.year} | {member.department}</p>
              <p className="text-sm italic mt-1 text-accent dark:text-blue-600">{member.tagline}</p>

              <div className="mt-4 flex gap-4">
                <a href={member.linkedin} className="text-primary hover:text-amber-500 transition-colors">
                  <FaLinkedin size={20} />
                </a>
                <a href={member.portfolio} className="text-primary hover:text-amber-500 transition-colors">
                  <FaGlobe size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
