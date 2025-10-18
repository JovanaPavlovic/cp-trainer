import { MapPin, Shield, FileText, Truck } from "lucide-react";
import style from "./euLocalization.module.css";

const EULocalization = () => {
  const euBenefits = [
    {
      icon: <Shield className="text-red-800" size={32} />,
      title: "EU MDR Compliance",
      description:
        "Fully compliant with European Medical Device Regulation for clinical applications",
    },
    {
      icon: <FileText className="text-red-800" size={32} />,
      title: "GDPR Data Protection",
      description:
        "Complete data privacy compliance with secure EU-based data processing",
    },
    {
      icon: <Truck className="text-red-800" size={32} />,
      title: "Local Support & Service",
      description:
        "European headquarters in Germany with multilingual technical support",
    },
    {
      icon: <MapPin className="text-red-800" size={32} />,
      title: "Regional Partnerships",
      description:
        "Authorized distributors across EU member states for local service",
    },
  ];

  const countries = [
    "Germany",
    "France",
    "Netherlands",
    "Belgium",
    "Austria",
    "Switzerland",
    "Italy",
    "Spain",
    "Denmark",
    "Sweden",
    "Finland",
    "Norway",
    "Poland",
    "Czech Republic",
  ];

  return (
    <section className="py-10 xl:py-20 bg-gray-900">
      <div className="max-w-full mx-auto xl:px-20 px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            European Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Designed and supported for European healthcare and research
            institutions with full regulatory compliance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* EU Benefits */}
          <div className="space-y-6">
            {euBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* EU Map Visualization */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-yellow-900/30 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Available Across Europe
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {countries.map((country, index) => (
                <div
                  key={index}
                  className={style.button}
                >
                  {country}
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className={style.button}>
                Find Local Distributor
              </button>
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        {/* <div className="bg-gray-800/30 p-8 rounded-xl border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Regulatory Compliance
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Full compliance with European regulations ensures seamless
              integration into your clinical and research workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-700/30 rounded-lg">
              <div className="text-emerald-400 font-bold text-lg mb-2">
                EU MDR
              </div>
              <div className="text-gray-300 text-sm">
                Medical Device Regulation
              </div>
            </div>
            <div className="text-center p-4 bg-gray-700/30 rounded-lg">
              <div className="text-yellow-400 font-bold text-lg mb-2">
                ISO 13485
              </div>
              <div className="text-gray-300 text-sm">Quality Management</div>
            </div>
            <div className="text-center p-4 bg-gray-700/30 rounded-lg">
              <div className="text-emerald-400 font-bold text-lg mb-2">
                GDPR
              </div>
              <div className="text-gray-300 text-sm">Data Protection</div>
            </div>
            <div className="text-center p-4 bg-gray-700/30 rounded-lg">
              <div className="text-yellow-400 font-bold text-lg mb-2">CE</div>
              <div className="text-gray-300 text-sm">Conformity Marking</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EULocalization;
