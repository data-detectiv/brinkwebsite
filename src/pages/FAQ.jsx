import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { containerVariants, itemVariants } from "../utils/helper";

const FAQ = () => {
  const { isDarkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who can join BR!NK?",
      answer: "BR!NK is open to college students who are seeking clarity, purpose, and leadership development. Our programs are designed for students at all stages of their college journey, from first-year students to graduating seniors."
    },
    {
      question: "How do I apply for the mentorship program?",
      answer: "To apply for our mentorship program, please contact us through our contact page or email brinkleadership@gmail.com. We'll provide you with application details and next steps. The program is selective to ensure the best match between mentors and mentees."
    },
    {
      question: "Is BR!NK free for students?",
      answer: "Yes, BR!NK programs are free for students. We believe that financial barriers should not prevent students from accessing mentorship, leadership development, and purpose discovery opportunities. Our programs are supported through donations, sponsorships, and partnerships."
    },
    {
      question: "How can companies partner with BR!NK?",
      answer: "Companies can partner with BR!NK in several ways: corporate sponsorship, providing mentors, hosting events, offering internships or opportunities for students, and supporting our programs financially. Please contact us to discuss partnership opportunities."
    },
    {
      question: "Are donations tax-deductible?",
      answer: "BR!NK is a registered nonprofit working toward federal 501(c)(3) approval. All donations will be tax-deductible upon approval. We maintain full transparency in our financial operations and will provide appropriate documentation for donations."
    },
    {
      question: "How can I volunteer or speak at an event?",
      answer: "We welcome volunteers and speakers who are passionate about youth development and leadership. Please reach out through our contact page or email brinkleadership@gmail.com with information about how you'd like to contribute. We're always looking for mentors, workshop facilitators, and event speakers."
    },
    {
      question: "What makes BR!NK different from other leadership programs?",
      answer: "BR!NK focuses on the intersection of purpose, emotional intelligence, and practical leadership skills. We don't just teach leadership theory—we help students discover who they are, develop deep self-awareness, and apply their purpose to create meaningful change. Our holistic approach combines mentorship, skill-building, and community impact."
    },
    {
      question: "How often are programs offered?",
      answer: "We offer programs throughout the year, including ongoing mentorship, monthly workshops, and our annual BR!NK Summit. Specific schedules vary by program. Join our newsletter to stay updated on upcoming opportunities and events."
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? "bg-[#2C2C2C] text-white" 
        : "bg-white text-[#2C2C2C]"
    } pt-20`}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-12 h-12 text-[#D4AF37]" />
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-[#1E3A5F]"
            }`}>
              Frequently Asked <span className="text-[#D4AF37]">Questions</span>
            </h1>
            <div className="w-24 h-1 mx-auto bg-[#D4AF37]"></div>
          </motion.div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-2xl overflow-hidden border-2 ${
                  isDarkMode 
                    ? "bg-[#1E3A5F] border-[#D4AF37]/30" 
                    : "bg-white border-[#1E3A5F]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full p-6 flex items-center justify-between text-left transition-colors ${
                    isDarkMode ? "hover:bg-[#2C2C2C]" : "hover:bg-[#D4AF37]/5"
                  }`}
                >
                  <h3 className={`text-lg font-semibold pr-4 ${
                    isDarkMode ? "text-white" : "text-[#1E3A5F]"
                  }`}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 ${
                      isDarkMode ? "text-[#D4AF37]" : "text-[#1E3A5F]"
                    }`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`p-6 pt-0 leading-relaxed ${
                        isDarkMode ? "text-white/90" : "text-[#2C2C2C]"
                      }`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className={`mb-4 ${
              isDarkMode ? "text-white/80" : "text-[#2C2C2C]"
            }`}>
              Still have questions?
            </p>
            <motion.a
              href="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-[#D4AF37] hover:bg-[#B8941F] text-[#000000] px-8 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;



