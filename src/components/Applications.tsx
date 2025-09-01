import {
  Stethoscope,
  Microscope,
  ActivityIcon,
  Handshake,
  GraduationCap,
} from "lucide-react";
import style from "./application.module.css";

const Applications = () => {
  const applications = [
    {
      icon: <Microscope className="text-emerald-400" size={48} />,
      title: "In the Lab",
      description:
        "Conduct standardized, research-grade assessments designed for academic rigor and publication-ready results.",
      useCases: [
        "Academic Research",
        "Clinical Trials",
        "Sports Science Studies",
        "Data-Driven Publications",
      ],
    },
    {
      icon: <ActivityIcon className="text-yellow-400" size={48} />,
      title: "On the Field",
      description:
        "Perform ast, objective screenings during training sessions or pre-competition routines - no setup hassle, just actionable data.",
      useCases: [
        "Pre-Competition Readiness",
        "Training Session Monitoring",
        "Injury prevention screening",
        "Coach Feedback",
      ],
    },
    {
      icon: <Stethoscope className="text-emerald-400" size={48} />,
      title: "In the Clinic",
      description:
        "Track rehabilitation and return-to-play progress with reliable, repeatable strength metrics that support confident decision-making",
      useCases: [
        "Rehabilitation Monitoring",
        "Injury Recovery Analysis",
        "Return-to-Play Clearance",
        "Progress Reporting",
      ],
    },
    {
      icon: <Handshake className="text-yellow-400" size={48} />,
      title: "With Teams",
      description:
        "Monitor and manage centralized performance data across your entire squad, which is updated in real time for coaches and support staff.",
      useCases: [
        "Team Performance Analysis",
        "Collaborative Coaching",
        "Informed Coach Decision-Making",
        "Long-Term Performance Tracking",
      ],
    },
    {
      icon: <GraduationCap className="text-emerald-400" size={48} />,
      title: "For Education",
      description:
        "Bring applied physiology to life with interactive tools that make learning measurable, hands-on, and engaging.",
      useCases: [
        "Hands-on Learning",
        "Practical Application",
        "Assessment & Feedback",
        "Professional Development",
      ],
    },
  ];

  return (
    <section className={style.container} id="applications">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Where CP Trainer Fits In
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A user-friendly force measurement system designed for clinicians,
            sports scientists, and performance pros who demand accuracy,
            seamless data integration, and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-700/50 rounded-lg">{app.icon}</div>
                <h3 className="text-2xl font-bold text-white">{app.title}</h3>
              </div>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {app.description}
              </p>

              <div className="space-y-3">
                {app.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                    <span className="text-gray-300">{useCase}</span>
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

export default Applications;
