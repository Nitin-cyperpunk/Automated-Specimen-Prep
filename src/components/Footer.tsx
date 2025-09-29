import { Github, Linkedin, Twitter, Youtube, FileText } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Documentation",
    "API Reference",
    "Community",
    "Support",
    "Privacy Policy",
    "Terms of Service",
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-300">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold shadow-lg">
                C
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                CablePrep AI
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Smart India Hackathon 2025 .  
              Built with ❤️ to redefine cable manufacturing with AI.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="relative inline-block text-gray-400 hover:text-white transition-colors after:block after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>📧 support@cableprep-ai.com</div>
              <div>💬 Join our Community</div>
              <div>🌐 www.cableprep-ai.com</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Latest Updates</h4>
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-medium text-green-400">✅ Version 2.1 Released</div>
                <div className="text-gray-400">Enhanced AI accuracy</div>
              </div>
              <div>
                <div className="font-medium text-blue-400">⚡ New Integration</div>
                <div className="text-gray-400">Cloud analytics dashboard</div>
              </div>
              <div>
                <div className="font-medium text-yellow-400">📜 Certification Update</div>
                <div className="text-gray-400">Latest IS standards compliance</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left space-y-2">
            <h5 className="text-lg font-semibold text-white">Stay in the loop</h5>
            <p className="text-sm text-gray-400">
              Subscribe to get product updates and industry insights.
            </p>
          </div>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-gray-200 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-r-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6">
            {[Github, Linkedin, Twitter, Youtube, FileText].map((Icon, i) => (
              <a
                key={i}
                href="https://specimen-prep.vercel.app/"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="text-gray-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} CablePrep AI | Smart India Hackathon 2025 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
