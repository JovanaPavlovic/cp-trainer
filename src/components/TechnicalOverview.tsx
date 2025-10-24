import { Bluetooth, LayoutDashboard, Smartphone } from "lucide-react";
import DeviceOneImg from "../assets/device_1.png";
import DeviceTwoImg from "../assets/device_2.png";
import DeviceThreeImg from "../assets/device_3.png";

import style from "./technicalOverview.module.css";

const TechnicalOverview = () => {
  const specifications = [
    {
      category: "Measurement Specifications",
      specs: [
        { label: "Force Range", value: "-" },
        { label: "Accuracy", value: "±0.1% full scale" },
        { label: "Resolution", value: "-" },
        { label: "Sampling Rate", value: "-" },
      ],
    },
    {
      category: "Physical Properties",
      specs: [
        { label: "Weight", value: "-" },
        { label: "Dimensions", value: "-" },
        { label: "Protection Rating", value: "-" },
        { label: "Operating Temperature", value: "-10°C to +50°C" },
      ],
    },
    {
      category: "Connectivity & Power",
      specs: [
        { label: "Wireless", value: "Bluetooth 5.0 LE" },
        { label: "Wired", value: "USB-C (data + charging)" },
        { label: "Battery Life", value: "-" },
        { label: "Charging Time", value: "-" },
      ],
    },
    {
      category: "Compliance & Standards",
      specs: [
        { label: "Medical Device", value: "-" },
        { label: "EMC", value: "-" },
        { label: "Safety", value: "-" },
        { label: "Quality", value: "-" },
      ],
    },
  ];

  const features = [
    {
      icon: <Bluetooth className={style.icon} size={32} />,
      title: "Compact, Durable Sensor Modules",
      description: "Engineered for versatility, built for performance.",
      useCases: [
        "Lightweight force sensors with click-lock and strap-based mounting options",
        "USB-C and Bluetooth connectivity",
        "Designed for both handheld and fixed-position use",
      ],
    },
    {
      icon: <Smartphone className={style.icon} size={32} />,
      title: "CP Trainer App",
      description: "Smart testing meets effortless execution",
      useCases: [
        "Step-by-step guided protocols for key isometric tests: (e.g., knee extension/flexion, mid-thigh pull, seated row, ISO push, peck-deck push, and more)",
        "Liveforce curves and real-time metrics, including peak force and asymmetry)",
        "Create athlete profiles, track progress history, and export data in CSV format",
      ],
    },
    {
      icon: <LayoutDashboard className={style.icon} size={32} />,
      title: "Dashboard Preview",
      description: "Compatible with any device via USB-C",
      useCases: [
        "Aggregate results across individuals or teams",
        "Color-coded visualizations highlight trends, risk, and readiness for fast decision-making",
        "Quick-view “return-to-play” visual thresholds support clinical and coaching decisions",
      ],
    },
  ];

  return (
    <section className="pt-10 xl:pt-20 bg-gray-950 opacity-95" id="specifications">
      <div className="max-w-full mx-auto xl:px-20 px-5">
        <div className="text-center mb-10 xl:mb-16">
          <h2 className="text-xl xl:text-4xl font-medium text-white mb-6 uppercase">
            Visual & Technical Overview
          </h2>
          <p className="text-[16px] xl:text-xl text-white leading-relaxed mb-10 max-w-3xl mx-auto">
            Precision hardware and intuitive software delivering real-time
            strength data, versatile mounting, and seamless connectivity for
            clinical and sports environments.
          </p>
        </div>

        {/* Visual Features */}
        <div className="grid grid-cols-1 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-600/30 p-4 xl:p-8 rounded-xl border border-gray-900 hover:border-red-400/50 transition-all duration-300"
            >
              <div className="mb-4 flex gap-3 items-center">
                <div className="flex justify-center bg-gray-600 rounded-lg p-3">
                  {feature.icon}
                </div>
                <h3 className="text-[16px] xl:text-xl font-semibold text-white uppercase">
                  {feature.title}
                </h3>
              </div>
              <h3 className="text-white text-[16px] xl:text-xl font-semibold mb-4 leading-relaxed capitalize">
                {feature.description}
              </h3>
              <div className="space-y-4">
                {feature?.useCases?.map((useCase, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {/* <span className="w-2 h-2 bg-red-800 rounded-full" />
                    <span className="text-white">{useCase}</span> */}
                    <ul className={style.listBullets}>
                      <li className="text-white text-sm xl:text-xl leading-relaxed">{useCase}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Device Image and Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 items-start">
          {/* Device Visualization */}
          {/* <div className="space-y-8"> */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-950 p-4 xl:p-8 rounded-xl border border-gray-800">
            <div
              className="w-full h-50 2xl:h-80 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${DeviceOneImg})`,
              }}
            />
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-950 p-4 xl:p-8 rounded-xl border border-gray-800">
            <div
              className="w-full h-50 2xl:h-80 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${DeviceTwoImg})`,
              }}
            />
          </div>
          <div className="bg-gradient-to-br from-gray-700 to-gray-950 p-4 xl:p-8 rounded-xl border border-gray-800">
            <div
              className="w-full h-50 2xl:h-80 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${DeviceThreeImg})`,
              }}
            />
          </div>
          {/* 
          <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">
                  500g
                </div>
                <div className="text-gray-300 text-sm">Ultra-lightweight</div>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">
                  IP65
                </div>
                <div className="text-gray-300 text-sm">
                  Dust & Water Protected
                </div>
              </div>
            </div> */}
        </div>

        {/* Technical Specifications */}
        <div className="space-8 grid grid-cols-1 lg:grid-cols-2 gap-x-20 py-10 xl:py-20">
          {specifications.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/30 rounded-xl border border-gray-800 overflow-hidden max-h-[320px] mb-8"
            >
              <div className="bg-red-600/85 p-4 border-b border-gray-800">
                <h3 className="text-[16px] xl:text-xl font-semibold text-white uppercase">
                  {category.category}
                </h3>
              </div>

              <div className="p-4 xl:p-6 space-y-4">
                {category.specs.map((spec, specIndex) => (
                  <div
                    key={specIndex}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white uppercase text-[14px] xl:text-[18px] leading-relaxed">{spec.label}</span>
                    <span className="font-semibold text-white text-[14px] xl:text-[18px] leading-relaxed">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalOverview;
