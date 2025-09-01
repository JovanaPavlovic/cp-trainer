import { Activity, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-600 rounded-lg">
                <Activity className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-white">CP Trainer</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Revolutionizing force measurement with precision, portability, and
              professional-grade reliability. Trusted by healthcare
              professionals, researchers, and sports scientists across Europe.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={18} className="text-emerald-400" />
                <span>+381 63 xxx xxx</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={18} className="text-emerald-400" />
                <span>info@something.eu</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin size={18} className="text-emerald-400 mt-1" />
                <span>
                  SomeStreet 1<br />
                  18 000 Nis, Serbia
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              {[
                "Product Overview",
                "Technical Specs",
                "Support Portal",
                "Training Resources",
                "Regulatory Info",
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 CP Trainer. All rights reserved. | Made in Serbia
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              >
                GDPR Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
