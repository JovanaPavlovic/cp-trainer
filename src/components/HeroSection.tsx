import { ChevronDown } from "lucide-react";
import HeroImage from "../assets/universal.jpg";
import style from "./heroSection.module.css";

const Hero = () => {
  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-gray-900/90" />

      {/* Content */}
      <div className={style.contentWrapper}>
        <h1 className={style.title}>
          Precision Strength Testing
          <div className={style.anywhereAnytime}>
            <span className={style.anywhere}>Anywhere</span>
            <span className="block text-yellow-400">Anytime</span>
          </div>
        </h1>

        <p className={style.description}>
          Measure peak force output across key muscle groups using a portable,
          research-backed system built by professionals, for professionals.
        </p>
        <p className={style.description}>
          Seamless data. Real-world workflows. Trusted results.
        </p>

        <div className={style.buttonWrapper}>
          <button className={style.button}>
            <span>Get Pricing & Info</span>
          </button>
        </div>

        <div className={style.stats}>
          <div className="text-center">
            <div className={style.accuracy}>±0.1%</div>
            <div className={style.text}>Measurement Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-lg xl:text-3xl font-bold text-yellow-400 mb-2">2000N</div>
            <div className={style.text}>Maximum Force</div>
          </div>
          <div className="text-center">
            <div className={style.weight}>500g</div>
            <div className={style.text}>Device Weight</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
