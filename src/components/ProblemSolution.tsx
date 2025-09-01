import { AlertTriangle, Target, CheckCircle } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-yellow-400" size={32} />
              <h2 className="text-3xl font-bold text-white">The Challenge</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-white mb-3">
                  When Testing Becomes the Barrier
                </h3>
                <p className="text-gray-300">
                  Traditional performance testing tools are bulky, expensive,
                  overcomplicated and limited to laboratory settings, making
                  field testing nearly impossible.
                </p>
              </div>

              <div className="bg-gray-700/50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Complex Tools. Confusing Results
                </h3>
                <p className="text-gray-300">
                  They require steep learning curves, consume valuable time, and
                  often fail to deliver clear, actionable insights.
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-emerald-400" size={32} />
              <h2 className="text-3xl font-bold text-white">Our Solution</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-emerald-900/30 p-6 rounded-lg border-l-4 border-emerald-400">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 mt-1" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Modular Power. Measurable Results
                    </h3>
                    <p className="text-gray-300">
                      CP Trainer redefines strength assessment with a compact,
                      modular system built for rapid assessments, precision,
                      simplicity, and real-time decision-making.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-900/30 p-6 rounded-lg border-l-4 border-emerald-400">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-400 mt-1" size={20} />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Elite Accuracy, Effortless Experience
                    </h3>
                    <p className="text-gray-300">
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
      </div>
    </section>
  );
};

export default ProblemSolution;
