// components/HomePage/FAQ.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does HirePilot apply to jobs for me?",
    answer:
      "After you set your preferences and upload your resume, HirePilot uses AI to find matching jobs and automatically submits applications on your behalf—no manual forms required.",
  },
  {
    question: "Do I need to provide my resume?",
    answer:
      "Yes, uploading your resume helps us auto-fill applications and improves the quality of job matches.",
  },
  {
    question: "Is my data safe and private?",
    answer:
      "Absolutely! We use secure encryption and never share your information without your permission. You control your data at all times.",
  },
  {
    question: "Can HirePilot apply to jobs on LinkedIn, Indeed, and others?",
    answer:
      "Yes, HirePilot supports auto-applying to jobs posted on leading platforms including LinkedIn and Indeed. We're adding more all the time!",
  },
  {
    question: "Does HirePilot guarantee a job offer?",
    answer:
      "We can't guarantee offers, but we maximize your application reach and help you get interviews faster by automating the process.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-gradient-to-b from-[#F9FAFC] to-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Everything you need to know about automating your job search with HirePilot.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const answerId = `faq-answer-${idx}`;
            const questionId = `faq-question-${idx}`;

            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm transition-all duration-200"
              >
                <button
                  id={questionId}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none rounded-2xl"
                >
                  <span className={`text-lg font-semibold transition-colors duration-200 ${
                    isOpen ? "text-blue-600" : "text-gray-900"
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200 ${
                     isOpen ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                  }`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: 0 },
                        collapsed: { opacity: 0, height: 0, marginTop: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
