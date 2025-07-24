import { Calculator, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Calculator className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">GradeConverter</h1>
              <p className="text-sm text-gray-500">Professional CGPA Tool</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <button 
              onClick={() => scrollToSection('converter')}
              className="text-lg text-gray-700 hover:text-primary font-semibold transition-colors"
            >
              Converter
            </button>
            <button 
              onClick={() => scrollToSection('guide')}
              className="text-lg text-gray-700 hover:text-primary font-semibold transition-colors"
            >
              Guide
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-lg text-gray-700 hover:text-primary font-semibold transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => scrollToSection('converter')}
                  className="text-left text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  Converter
                </button>
                <button 
                  onClick={() => scrollToSection('guide')}
                  className="text-left text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  Guide
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-left text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  FAQ
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
