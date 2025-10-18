import { Puzzle, HardHat, FileText, User, Eye, Headphones } from "lucide-react";
import style from "./features.module.css";

const Features = () => {
  const features = [
    {
      icon: <Puzzle className={style.icon} size={32} />,
      title: "Modular & Portable Hardware",
      description:
        "Quickly adapt to any test setup, such as a clinic, lab, field, or gym.",
      benefit: "One System, Every Setting",
    },
    {
      icon: <HardHat className={style.icon} size={32} />,
      title: "Built by Experts, Made for the Real World",
      description:
        "Designed by sports scientists and S&C coaches who understand real-world workflows.",
      benefit: "Built for how you actually work",
    },
    {
      icon: <FileText className={style.icon} size={32} />,
      title: "Research-Aligned Protocol",
      description:
        "Supports validated methods for isometric testing, asymmetry detection, return-to-play decisions, and more",
      benefit: "Validated testing for safer return-to-play.",
    },
    {
      icon: <User className={style.icon} size={32} />,
      title: "User-Centric App Experience",
      description:
        "No steep learning curve. Just smart software that works the way you do.",
      benefit: "Works Seamlessly With You",
    },
    {
      icon: <Eye className={style.icon} size={32} />,
      title: "Transparent Subscription Model",
      description: "No hidden fees. No surprises. Just value you can trust.",
      benefit: "Clear Fees, Trusted Value",
    },
    {
      icon: <Headphones className={style.icon} size={32} />,
      title: "Expert Support & Education",
      description: "We don’t just sell equipment, we help you master it.",
      benefit: "More Than Gear — Real Expertise",
    },
  ];

  return (
    <section className="py-10 xl:py-20 bg-gray-950 opacity-95" id="features">
      <div className="max-w-full mx-auto xl:px-20 px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Features & Benefits
          </h2>
          <p className="text-xl xl:text-2xl text-white max-w-3xl mx-auto">
            Engineered for Precision, Portability, and Practical Performance
            Insight.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={style.cardContent}
            >
              <div className="mb-6 group-hover:scale-100 transition-transform duration-300 flex gap-3 xl:gap-6 items-center">
                <div className="p-1 xl:p-3 bg-gray-800 rounded-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg xl:text-2xl font-bold text-white uppercase">
                  {feature.title}
                </h3>
              </div>
              <p className="text-white mb-4 leading-relaxed xl:text-2xl">
                {feature.description}
              </p>

              <div className={style.text}>
                → {feature.benefit}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className={style.button}>
            Download Technical Specifications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
