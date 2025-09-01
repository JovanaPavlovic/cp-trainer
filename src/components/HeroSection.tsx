import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3912952/pexels-photo-3912952.jpeg?_gl=1*zdrlak*_ga*MTQ2MjM2NTkyLjE3NTY2NTkwNjU.*_ga_8JE65Q40S6*czE3NTY2NTkwNjUkbzEkZzEkdDE3NTY2NTkyMjUkajU0JGwwJGgw")',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-gray-900/90" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white mb-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-40 leading-tight">
          Precision Strenght Testing
          <div className="text-4xl md:text-4xl flex py-6 gap-6 justify-center">
            <span className="block text-emerald-400">Anywhere</span>
            <span className="block text-yellow-400">Anytime</span>
          </div>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Measure peak force output across key muscle groups using a portable,
          research-backed system built by professionals, for professionals.
        </p>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-200">
          Seamless data. Real-world workflows. Trusted results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Pricing & Info
          </button>
          {/* <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            View Specifications
          </button> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              ±0.1%
            </div>
            <div className="text-gray-300">Measurement Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2000N</div>
            <div className="text-gray-300">Maximum Force</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">500g</div>
            <div className="text-gray-300">Device Weight</div>
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
