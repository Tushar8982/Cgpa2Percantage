import { Calculator, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Calculator className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold">GradeConverter</h3>
                <p className="text-sm text-gray-400">Professional CGPA Tool</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional CGPA to percentage conversion tool trusted by students worldwide. Accurate, fast, and supporting multiple grading scales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#converter" className="hover:text-white transition-colors">CGPA Converter</a></li>
              <li><a href="#guide" className="hover:text-white transition-colors">Conversion Guide</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Grade Calculators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">University Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academic Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 GradeConverter. All rights reserved. Built for students, by students.</p>
        </div>
      </div>
    </footer>
  );
}
