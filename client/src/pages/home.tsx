import { CheckCircle, Smartphone, Zap } from "lucide-react";
import Header from "@/components/header";
import ConverterForm from "@/components/converter-form";
import EducationalGuide from "@/components/educational-guide";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/8 to-blue-50 py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            CGPA to Percentage <span className="text-primary">Converter</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Professional-grade conversion tool supporting multiple grading scales. Accurate, fast, and trusted by students worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg text-gray-600">
            <div className="flex items-center space-x-3">
              <CheckCircle className="text-secondary w-6 h-6" />
              <span className="font-medium">Multiple Scales Supported</span>
            </div>
            <div className="flex items-center space-x-3">
              <Smartphone className="text-secondary w-6 h-6" />
              <span className="font-medium">Mobile Optimized</span>
            </div>
            <div className="flex items-center space-x-3">
              <Zap className="text-secondary w-6 h-6" />
              <span className="font-medium">Instant Results</span>
            </div>
          </div>
        </div>
      </section>

      <ConverterForm />



      <EducationalGuide />
      <FaqSection />



      <Footer />
    </div>
  );
}
