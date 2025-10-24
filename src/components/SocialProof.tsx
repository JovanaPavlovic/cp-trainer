import {
  ShieldCheck,
  Cloud,
  FileText,
  Languages,
  Headset,
  Globe,
} from "lucide-react";

import style from "./socialProof.module.css";

const SocialProof = () => {
  // const testimonials = [
  //   {
  //     quote:
  //       "The CP Trainer has revolutionized our rehabilitation protocols. The accuracy and portability allow us to conduct assessments that were previously impossible.",
  //     author: "Dr. Sarah Mitchell",
  //     title: "Head of Physical Therapy",
  //     organization: "Munich Sports Medicine Center",
  //   },
  //   {
  //     quote:
  //       "Exceptional build quality and precision. We've integrated it into our research protocols with remarkable results in data consistency.",
  //     author: "Prof. Andreas Weber",
  //     title: "Biomechanics Researcher",
  //     organization: "Technical University of Berlin",
  //   },
  //   {
  //     quote:
  //       "Game-changing technology for sports performance assessment. Our athletes love the immediate feedback and coaches appreciate the detailed analytics.",
  //     author: "Marco Rossi",
  //     title: "Performance Director",
  //     organization: "Elite Training Academy",
  //   },
  // ];

  const certifications = [
    {
      title: "CE Marking Compliance",
      icon: ShieldCheck,
    },
    {
      title: "GDPR-Compliant Cloud Data Infrastructure",
      icon: Cloud,
    },
    {
      title: "VAT Invoicing for Institutions and Universities",
      icon: FileText,
    },
    {
      title: "Multilingual App Support (EN, DE, FR — more on request)",
      icon: Languages,
    },
    {
      title: "EU-Based Customer Support and Fulfillment",
      icon: Headset,
    },
  ];

  // const stats = [
  //   { number: "500+", label: "Healthcare Facilities" },
  //   { number: "50+", label: "Research Institutions" },
  //   { number: "25", label: "Countries Served" },
  //   { number: "99.8%", label: "Uptime Reliability" },
  // ];

  return (
    <section className="py-10 xl:py-20 bg-gray-950" id="localization">
      <div className="max-w-6xl lg:max-w-full mx-auto px-5 xl:px-20">
        {/* Stats */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Testimonials */}
        {/* <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Trusted by Professionals
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={20}
                    />
                  ))}
                </div>

                <blockquote className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-emerald-400 text-sm">
                    {testimonial.title}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Certifications */}
        <>
          <div className="text-3xl font-semibold text-white mb-8 flex items-center justify-center gap-3 uppercase w-full">
            <Globe className={style.icon} size={38} />
            <h2 className="text-lg xl:text-3xl font-medium text-white">EU-Focused Localization</h2>
          </div>

          <div className="grid grid-cols-1 gap-3 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-600/30 p-4 rounded-lg border border-gray-700 text-white font-semibold flex items-center"
              >
                {cert?.icon && (
                  <div className="flex items-center gap-6">
                    <div className="flex items-center p-3 bg-gray-600 rounded-lg">
                      <cert.icon className={style.icon} size={32} />
                    </div>
                    <p className="text-sm xl:text-xl font-semibold text-white pr-4 uppercase ">{cert?.title}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      </div>
    </section>
  );
};

export default SocialProof;
