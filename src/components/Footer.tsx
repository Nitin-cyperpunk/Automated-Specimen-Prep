import { Github, Linkedin, Twitter, Youtube, FileText } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Documentation",
    "API Reference", 
    "Community",
    "Support",
    "Privacy Policy",
    "Terms of Service"
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary-foreground text-primary font-bold">
                C
              </div>
              <span className="text-xl font-bold">CablePrep AI</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Smart India Hackathon 2025 Winner. 
              Built with ❤️ for the cable manufacturing industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div>📧 support@cableprep-ai.com</div>
              <div>💬 CablePrep AI Community</div>
              <div>🌐 www.cableprep-ai.com</div>
            </div>
          </div>

          {/* Latest Updates */}
          <div>
            <h4 className="font-semibold mb-4">Latest Updates</h4>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="font-medium text-success">Version 2.1 Released</div>
                <div className="text-primary-foreground/80">Enhanced AI accuracy</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-accent">New Integration</div>
                <div className="text-primary-foreground/80">Cloud analytics dashboard</div>
              </div>
              <div className="text-sm">
                <div className="font-medium text-primary-foreground">Certification Update</div>
                <div className="text-primary-foreground/80">Latest IS standards compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <a href="#github" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#linkedin" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#twitter" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#youtube" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#research" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <FileText className="w-5 h-5" />
            </a>
          </div>
          
          <div className="text-primary-foreground/80 text-sm text-center md:text-right">
            © 2024 CablePrep AI Team | Smart India Hackathon 2025 Winner
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;