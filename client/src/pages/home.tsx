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
      <section className="bg-gradient-to-br from-primary/5 to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CGPA to Percentage <span className="text-primary">Converter</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional-grade conversion tool supporting multiple grading scales. Accurate, fast, and trusted by students worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="text-secondary w-5 h-5" />
              <span>Multiple Scales Supported</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="text-secondary w-5 h-5" />
              <span>Mobile Optimized</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="text-secondary w-5 h-5" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="bg-gray-100 border-2 border-dashed border-gray-300">
          <CardContent className="p-8 text-center">
            <p className="text-gray-500 font-medium">Advertisement Space</p>
            <p className="text-sm text-gray-400 mt-1">728x90 Banner Ad</p>
          </CardContent>
        </Card>
      </div>

      <ConverterForm />

      {/* Ad Space Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="bg-gray-100 border-2 border-dashed border-gray-300">
          <CardContent className="p-6 text-center">
            <p className="text-gray-500 font-medium">Advertisement Space</p>
            <p className="text-sm text-gray-400 mt-1">300x250 Medium Rectangle</p>
          </CardContent>
        </Card>
      </div>

      <EducationalGuide />
      <FaqSection />

      {/* Ad Space Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Card className="bg-gray-100 border-2 border-dashed border-gray-300">
          <CardContent className="p-8 text-center">
            <p className="text-gray-500 font-medium">Advertisement Space</p>
            <p className="text-sm text-gray-400 mt-1">728x90 Banner Ad</p>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
