import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "What is the difference between CGPA and GPA?",
    answer: "CGPA (Cumulative Grade Point Average) is the average of grade points obtained in all subjects over all semesters/years. GPA typically refers to the grade point average for a specific semester or term. CGPA gives a comprehensive view of academic performance throughout the entire course duration."
  },
  {
    question: "Is the CGPA to percentage conversion formula universal?",
    answer: "No, different universities and countries use different conversion formulas. The most common formula for 10.0 scale is (CGPA × 10) - 7.5, but some institutions use (CGPA × 9.5) or other variations. Always check with your specific institution for their official conversion method."
  },
  {
    question: "How accurate is this converter for university applications?",
    answer: "This converter uses standard formulas and provides accurate estimates for most institutions. However, for official university applications, always use the conversion method specified by the target institution or consult with their admissions office for the most accurate conversion."
  },
  {
    question: "Can I convert percentage back to CGPA?",
    answer: "Yes, you can convert percentage back to CGPA using the reverse formula. For 10.0 scale: CGPA = (Percentage + 7.5) ÷ 10. Use the 'Percentage to CGPA' tab in our converter for this calculation. Remember that the accuracy depends on using the same conversion standard that was originally used."
  },
  {
    question: "What CGPA is considered good for higher studies?",
    answer: "Generally, a CGPA of 8.0+ (10.0 scale) or 3.5+ (4.0 scale) is considered good for higher studies. For top universities abroad, a CGPA of 8.5+ (10.0 scale) or 3.7+ (4.0 scale) is often preferred. However, admission requirements vary significantly between institutions and programs."
  }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Get answers to common questions about CGPA and percentage conversion.
          </p>
        </div>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <Card key={index} className="border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <Button
                variant="ghost"
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors h-auto"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-900 text-left flex-1 text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  size={24}
                />
              </Button>
              {openFaq === index && (
                <CardContent className="px-8 pb-6 pt-0">
                  <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
