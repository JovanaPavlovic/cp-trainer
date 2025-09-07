import { Puzzle, HardHat, FileText, User, Eye, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Puzzle className="text-yellow-600" size={32} />,
      title: "Modular & Portable Hardware",
      description:
        "Quickly adapt to any test setup, such as a clinic, lab, field, or gym.",
      benefit: "One System, Every Setting",
    },
    {
      icon: <HardHat className="text-red-800" size={32} />,
      title: "Built by Experts, Made for the Real World",
      description:
        "Designed by sports scientists and S&C coaches who understand real-world workflows.",
      benefit: "Built for how you actually work",
    },
    {
      icon: <FileText className="text-yellow-600" size={32} />,
      title: "Research-Aligned Protocol",
      description:
        "Supports validated methods for isometric testing, asymmetry detection, return-to-play decisions, and more",
      benefit: "Validated testing for safer return-to-play.",
    },
    {
      icon: <User className="text-red-800" size={32} />,
      title: "User-Centric App Experience",
      description:
        "No steep learning curve. Just smart software that works the way you do.",
      benefit: "Works Seamlessly With You",
    },
    {
      icon: <Eye className="text-yellow-600" size={32} />,
      title: "Transparent Subscription Model",
      description: "No hidden fees. No surprises. Just value you can trust.",
      benefit: "Clear Fees, Trusted Value",
    },
    {
      icon: <Headphones className="text-red-800" size={32} />,
      title: "Expert Support & Education",
      description: "We don’t just sell equipment, we help you master it.",
      benefit: "More Than Gear — Real Expertise",
    },
  ];

  return (
    <section className="py-20 bg-gray-950 opacity-95" id="features">
      <div className="max-w-full mx-auto lg:px-40 px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Features & Benefits
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Engineered for Precision, Portability, and Practical Performance
            Insight.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800/30 p-8 rounded-xl border border-gray-900 hover:border-yellow-600/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex gap-6 items-center">
                <div className="p-3 bg-gray-900/50 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white mb-4 leading-relaxed text-lg">
                {feature.description}
              </p>

              <div className="text-red-800 font-semibold text-xl">
                → {feature.benefit}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-red-800 to-red-900 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Download Technical Specifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
