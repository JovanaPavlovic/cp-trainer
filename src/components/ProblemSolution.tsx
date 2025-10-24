import { AlertTriangle, Target, CheckCircle, AlertCircle } from "lucide-react";
import style from "./problemSolution.module.css";

const ProblemSolution = () => {
  return (
    <section className="py-10 xl:py-20 bg-gray-950" id="problems&solutions">
      <div className={style.contentWrapper}>
        <div className={style.cardsWrapper}>
          {/* Problem */}
          <div className={style.cards}>
            <div className={style.cardsHeader}>
              <AlertTriangle className="text-yellow-400" size={32} />
              <h2 className="text-xl xl:text-2xl font-semibold text-white">
                The Challenge
              </h2>
            </div>

            <div className="space-y-6 h-full">
              <div className={style.problemCard}>
                <div className="flex gap-3 items-center mb-3">
                  <AlertCircle className="text-yellow-400" size={32} />
                  <h3 className="text-lg xl:text-xl font-semibold text-white">
                    When Testing Becomes the Barrier
                  </h3>
                </div>
                <p className="text-white text-sm xl:text-[18px] leading-relaxed">
                  Traditional performance testing tools are bulky, expensive,
                  overcomplicated and limited to laboratory settings, making
                  field testing nearly impossible.
                </p>
              </div>

              <div className={style.problemCard}>
                <div className="flex gap-3 items-center mb-3">
                  <AlertCircle className="text-yellow-400" size={32} />
                  <h3 className="text-lg xl:text-xl font-semibold text-white">
                    Complex Tools. Confusing Results
                  </h3>
                </div>
                <p className="text-white text-sm xl:text-[18px] leading-relaxed">
                  They require steep learning curves, consume valuable time, and
                  often fail to deliver clear, actionable insights.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className={style.cards}>
            <div className={style.cardsHeader}>
              <Target className={style.icon} size={32} />
              <h2 className="text-lg xl:text-2xl font-semibold text-white">Our Solution</h2>
            </div>

            <div className="space-y-6 h-full">
              <div className={style.solutionCard}>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex gap-3 items-center">
                    <CheckCircle className={style.icon} size={32} />
                    <h3 className="text-lg xl:text-xl font-semibold text-white">
                      Modular Power. Measurable Results
                    </h3>
                  </div>

                  <p className="text-white text-sm xl:text-[18px] leading-relaxed">
                    CP Trainer redefines strength assessment with a compact,
                    modular system built for rapid assessments, precision,
                    simplicity, and real-time decision-making.
                  </p>
                </div>
              </div>
              <div className={style.solutionCard}>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex gap-3 items-center">
                    <CheckCircle className={style.icon} size={32} />
                    <h3 className="text-lg xl:text-xl font-semibold text-white">
                      Elite Accuracy, Effortless Experience
                    </h3>
                  </div>
                  <p className="text-white text-sm xl:text-[18px] leading-relaxed">
                    Designed for performance professionals, it combines
                    elite-level accuracy with an intuitive app experience and
                    transparent, accessible pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
