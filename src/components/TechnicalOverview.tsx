import { Bluetooth, LayoutDashboard, Smartphone } from "lucide-react";

const TechnicalOverview = () => {
  // const specifications = [
  //   {
  //     category: "Measurement Specifications",
  //     specs: [
  //       { label: "Force Range", value: "0.1N - 2000N" },
  //       { label: "Accuracy", value: "±0.1% full scale" },
  //       { label: "Resolution", value: "0.01N" },
  //       { label: "Sampling Rate", value: "1000 Hz" },
  //     ],
  //   },
  //   {
  //     category: "Physical Properties",
  //     specs: [
  //       { label: "Weight", value: "500g" },
  //       { label: "Dimensions", value: "180 × 65 × 25 mm" },
  //       { label: "Protection Rating", value: "IP65" },
  //       { label: "Operating Temperature", value: "-10°C to +50°C" },
  //     ],
  //   },
  //   {
  //     category: "Connectivity & Power",
  //     specs: [
  //       { label: "Wireless", value: "Bluetooth 5.0 LE" },
  //       { label: "Wired", value: "USB-C (data + charging)" },
  //       { label: "Battery Life", value: "12+ hours continuous" },
  //       { label: "Charging Time", value: "2 hours (fast charge)" },
  //     ],
  //   },
  //   {
  //     category: "Compliance & Standards",
  //     specs: [
  //       { label: "Medical Device", value: "Class IIa (EU MDR)" },
  //       { label: "EMC", value: "IEC 60601-1-2" },
  //       { label: "Safety", value: "IEC 62304" },
  //       { label: "Quality", value: "ISO 13485" },
  //     ],
  //   },
  // ];

  const features = [
    {
      icon: <Bluetooth className="text-emerald-400" size={48} />,
      title: "Compact, Durable Sensor Modules",
      description: "Engineered for versatility, built for performance.",
      useCases: [
        "Lightweight force sensors with click-lock and strap-based mounting options",
        "USB-C and Bluetooth connectivity",
        "Designed for both handheld and fixed-position use",
      ],
    },
    {
      icon: <Smartphone className="text-yellow-400" size={48} />,
      title: "CP Trainer App",
      description: "Smart testing meets effortless execution",
      useCases: [
        "Step-by-step guided protocols for key isometric tests: (e.g., knee extension/flexion, mid-thigh pull, seated row, ISO push, peck-deck push, and more)",
        "Liveforce curves and real-time metrics, including peak force and asymmetry)",
        "Create athlete profiles, track progress history, and export data in CSV format",
      ],
    },
    {
      icon: <LayoutDashboard className="text-emerald-400" size={48} />,
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
    <section className="pb-20 bg-gray-800" id="specifications">
      <div className="max-w-6xl lg:max-w-full mx-auto px-5 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Visual & Technical Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Precision hardware and intuitive software delivering real-time
            strength data, versatile mounting, and seamless connectivity for
            clinical and sports environments.
          </p>
        </div>

        {/* Visual Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <h3 className="text-gray-300 text-lg text-center font-semibold mb-4">
                {feature.description}
              </h3>
              <div className="space-y-3">
                {feature?.useCases?.map((useCase, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-gray-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Device Image and Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Device Visualization */}
          <div className="space-y-8">
            {/* <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-xl border border-gray-600">
              <div
                className="w-full h-80 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/6823543/pexels-photo-6823543.jpeg")',
                }}
              />
            </div> */}

            {/* <div className="grid grid-cols-2 gap-4">
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
          {/* <div className="space-y-8">
            {specifications.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900/50 rounded-xl border border-gray-700 overflow-hidden"
              >
                <div className="bg-emerald-900/30 p-4 border-b border-gray-700">
                  <h3 className="text-lg font-bold text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  {category.specs.map((spec, specIndex) => (
                    <div
                      key={specIndex}
                      className="flex justify-between items-center"
                    >
                      <span className="text-gray-300">{spec.label}</span>
                      <span className="font-semibold text-white">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TechnicalOverview;
