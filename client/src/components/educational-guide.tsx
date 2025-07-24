import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, University, Globe, Star } from "lucide-react";

const scaleData = [
  {
    icon: GraduationCap,
    title: "10.0 Scale",
    description: "Most Indian universities use this scale with grades from 0 to 10.",
    formula: "% = (CGPA × 10) - 7.5",
    example: "8.5 CGPA = 77.5%",
    bgColor: "from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
  },
  {
    icon: University,
    title: "4.0 Scale",
    description: "Standard in US and Canadian universities with grades A to F.",
    formula: "% = (CGPA ÷ 4) × 100",
    example: "3.5 GPA = 87.5%",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    iconBg: "bg-green-500",
  },
  {
    icon: Globe,
    title: "5.0 Scale",
    description: "Used in Germany and some European institutions.",
    formula: "% = (5 - CGPA) × 20 + 20",
    example: "2.0 GPA = 80%",
    bgColor: "from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-500",
  },
  {
    icon: Star,
    title: "7.0 Scale",
    description: "Common in Australian universities and some Asian institutions.",
    formula: "% = (CGPA ÷ 7) × 100",
    example: "6.0 GPA = 85.7%",
    bgColor: "from-orange-50 to-amber-50",
    borderColor: "border-orange-200",
    iconBg: "bg-orange-500",
  },
];

const conversionTableData = [
  { cgpa: "10.0", percentage: "92.5%", grade: "O (Outstanding)", gpa4: "4.0" },
  { cgpa: "9.0", percentage: "82.5%", grade: "A+ (Excellent)", gpa4: "3.6" },
  { cgpa: "8.0", percentage: "72.5%", grade: "A (Very Good)", gpa4: "3.2" },
  { cgpa: "7.0", percentage: "62.5%", grade: "B+ (Good)", gpa4: "2.8" },
  { cgpa: "6.0", percentage: "52.5%", grade: "B (Average)", gpa4: "2.4" },
];

export default function EducationalGuide() {
  return (
    <section id="guide" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding CGPA Conversion</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about different grading systems and conversion methods used by universities worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {scaleData.map((scale, index) => {
            const Icon = scale.icon;
            return (
              <Card key={index} className={`bg-gradient-to-br ${scale.bgColor} border ${scale.borderColor} hover:shadow-lg transition-shadow`}>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 ${scale.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{scale.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{scale.description}</p>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p><strong>Formula:</strong> {scale.formula}</p>
                    <p><strong>Example:</strong> {scale.example}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Conversion Table */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">CGPA to Percentage Conversion Table</h3>
          <Card className="shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CGPA (10.0)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Percentage</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Grade</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">GPA (4.0)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {conversionTableData.map((row, index) => (
                    <tr key={index} className={index % 2 === 1 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">{row.cgpa}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{row.percentage}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{row.grade}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{row.gpa4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
