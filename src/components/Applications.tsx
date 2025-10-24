import {
  Stethoscope,
  Microscope,
  ActivityIcon,
  Handshake,
  GraduationCap,
} from "lucide-react";
import style from "./application.module.css";
import labImage from "../assets/Lab.jpg";
import onFiled from "../assets/OnField.jpg";
import clinicImage from "../assets/Clinic.jpg";
import teamsImage from "../assets/Teams.jpg";
import educationImage from "../assets/Education.jpg";

const Applications = () => {
  const applications = [
    {
      icon: <Microscope className={style.icon} size={32} />,
      title: "In the Lab",
      description:
        "Conduct standardized, research-grade assessments designed for academic rigor and publication-ready results.",
      useCases: [
        "Academic Research",
        "Clinical Trials",
        "Sports Science Studies",
        "Data-Driven Publications",
      ],
      image: labImage,
    },
    {
      icon: <ActivityIcon className={style.icon} size={32} />,
      title: "On the Field",
      description:
        "Perform ast, objective screenings during training sessions or pre-competition routines - no setup hassle, just actionable data.",
      useCases: [
        "Pre-Competition Readiness",
        "Training Session Monitoring",
        "Injury prevention screening",
        "Coach Feedback",
      ],
      image: onFiled,
    },
    {
      icon: <Stethoscope className={style.icon} size={32} />,
      title: "In the Clinic",
      description:
        "Track rehabilitation and return-to-play progress with reliable, repeatable strength metrics that support confident decision-making",
      useCases: [
        "Rehabilitation Monitoring",
        "Injury Recovery Analysis",
        "Return-to-Play Clearance",
        "Progress Reporting",
      ],
      image: clinicImage,
    },
    {
      icon: <Handshake className={style.icon} size={32} />,
      title: "With Teams",
      description:
        "Monitor and manage centralized performance data across your entire squad, which is updated in real time for coaches and support staff.",
      useCases: [
        "Team Performance Analysis",
        "Collaborative Coaching",
        "Informed Coach Decision-Making",
        "Long-Term Performance Tracking",
      ],
      image: teamsImage,
    },
    {
      icon: <GraduationCap className={style.icon} size={32} />,
      title: "For Education",
      description:
        "Bring applied physiology to life with interactive tools that make learning measurable, hands-on, and engaging.",
      useCases: [
        "Hands-on Learning",
        "Practical Application",
        "Assessment & Feedback",
        "Professional Development",
      ],
      image: educationImage,
    },
  ];

  return (
    <section className={style.container} id="applications">
      <div className="max-w-full">
        <div className="text-center mb-16">
          <h2 className="text-xl xl:text-4xl font-medium text-white mb-6 uppercase">
            Where CP Trainer Fits In
          </h2>
          <p className="text-[16px] xl:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            A user-friendly force measurement system designed for clinicians,
            sports scientists, and performance pros who demand accuracy,
            seamless data integration, and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mx-auto">
          {applications.map((app, index) => (
            // <div className="flex">
            <div
              key={index}
              className={`bg-gray-600/30 p-4 xl:p-8 rounded-xl border border-gray-900 hover:border-red-400/50 transition-all duration-300 flex flex-col lg:flex-row ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-600 rounded-lg">{app.icon}</div>
                  <h3 className={style.title}>
                    {app.title}
                  </h3>
                </div>

                <p className="text-white mb-6 text-[16px] xl:text-[18px] leading-relaxed">
                  {app.description}
                </p>

                <div className="space-y-2">
                  {app.useCases.map((useCase, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-800 rounded-full" />
                      <span className="text-white text-sm xl:text-[16px] leading-relaxed">
                        {useCase}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="w-full lg:w-1/2 aspect-video rounded-2xl bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${app.image})` }}
              >
              </div>
            </div>
            // </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
