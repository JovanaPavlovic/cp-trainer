import { Mail } from "lucide-react";
import logo from "../assets/logo_small.png";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-16 border-t border-gray-900">
      <div className="max-w-full mx-auto px-5 xl:px-20">
        <div className="grid grid-cols-1 xl:grid-cols-[40%_30%_30%] gap-8 xl:gap-20 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <div className="p-2 bg-red-800 rounded-lg">
                <Activity className="text-white" size={24} />
              </div> */}
              <img src={logo} alt="Logo" className="w-12 h-12" />
              <span className="text-sm xl:text-[16px] font-semibold uppercase text-white">
                CP Trainer
              </span>
            </div>

            <p className="text-white mb-6 leading-relaxed xl:text-[16px] text-sm">
              Revolutionizing force measurement with precision, portability, and
              professional-grade reliability. Trusted by healthcare
              professionals, researchers, and sports scientists across Europe.
            </p>

            {/* <div className="flex gap-4">
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
            </div> */}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm xl:text-[16px] font-semibold uppercase text-white mb-6">
              Contact
            </h3>
            <div className="space-y-2">
              {/* <div className="flex items-center gap-3 text-white text-sm xl:text-[16px] leading-relaxed">
                <Phone size={24} className={style.icon} />
                <span>+381 63 231 193</span>
              </div> */}
              <div className="flex items-center gap-3 text-white text-sm xl:text-[16px] leading-relaxed">
                <Mail size={24} className={style.icon} />
                <span>info@completeperformance.eu</span>
              </div>
              {/* <div className="flex items-center gap-3 text-white text-sm xl:text-[16px] leading-relaxed">
                <MapPin size={24} className={style.icon} />
                <span>Bul. Dr Zorana Đinđića 25/5, Serbia, 18000 Niš</span>
              </div> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm xl:text-[16px] font-semibold uppercase text-white mb-6">
              Quick Links
            </h3>
            <div className="space-y-2">
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
                  className="block text-white hover:text-red-600 hover:underline transition-colors duration-300 text-sm xl:text-[16px] leading-relaxed"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 xl:grid-cols-[40%_30%_30%] gap-8 xl:gap-20 mb-12">
            <div className="text-white text-sm xl:text-[16px]">
              © 2025 CP Trainer. All rights reserved. | Made in Serbia
            </div>
            <div></div>
            <div className="flex flex-col xl:felx-row gap-2 xl:gap-6 xl:text-xl">
              <a
                href="#"
                className="text-white hover:text-red-700 transition-colors duration-300 text-sm xl:text-[16px]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white hover:text-red-700 transition-colors duration-300 text-sm xl:text-[16px]"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white hover:text-red-700 transition-colors duration-300 text-sm xl:text-[16px]"
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
