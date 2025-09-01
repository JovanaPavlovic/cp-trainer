import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is CP Trainer validated for clinical or research use?",
      answer:
        "Yes—our protocols align with peer-reviewed methods and are currently in use in both academic and elite sport settings.",
    },
    {
      question: "Can it integrate with other tools?",
      answer: "Yes—data export and upcoming integrations ensure flexibility.",
    },
    {
      question: "Do I need a subscription to use the hardware?",
      answer:
        "Yes, but it’s simple, transparent, and comes with premium support, updates, and insights.",
    },
    {
      question: "Can I use it in different environments?",
      answer:
        "Absolutely. CP Trainer is designed for ultimate versatility, whether you’re in the clinic, on the field, in the gym, or in a research lab. Its rugged, portable build ensures it performs wherever performance matters.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-950 opacity-95" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white">
            Get answers to common questions about the CP Trainer system
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl border border-gray-900 overflow-hidden hover:border-red-800/30 transition-all duration-300"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="text-red-800" size={24} />
                  ) : (
                    <ChevronDown className="text-white" size={24} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <p className="text-white leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-white mb-6">
            Still have questions? Our technical team is here to help.
          </p>
          <button className="bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Contact Technical Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
