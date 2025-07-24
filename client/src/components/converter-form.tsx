import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, ArrowRight, ArrowLeft } from "lucide-react";
import { cgpaToPercentageSchema, percentageToCgpaSchema, type CgpaToPercentageForm, type PercentageToCgpaForm, type ConversionResult } from "@shared/schema";
import { cgpaToPercentage, percentageToCgpa, scaleInfo, conversionStandards, quickReferenceData } from "@/lib/conversion-utils";

export default function ConverterForm() {
  const [cgpaResult, setCgpaResult] = useState<ConversionResult | null>(null);
  const [percentageResult, setPercentageResult] = useState<ConversionResult | null>(null);

  const cgpaForm = useForm<CgpaToPercentageForm>({
    resolver: zodResolver(cgpaToPercentageSchema),
    defaultValues: {
      cgpa: 0,
      scale: "10",
      conversionStandard: "standard",
    },
  });

  const percentageForm = useForm<PercentageToCgpaForm>({
    resolver: zodResolver(percentageToCgpaSchema),
    defaultValues: {
      percentage: 0,
      targetScale: "10",
      conversionStandard: "standard",
    },
  });

  const onCgpaSubmit = (data: CgpaToPercentageForm) => {
    const result = cgpaToPercentage(data.cgpa, data.scale, data.conversionStandard);
    setCgpaResult(result);
  };

  const onPercentageSubmit = (data: PercentageToCgpaForm) => {
    const result = percentageToCgpa(data.percentage, data.targetScale, data.conversionStandard);
    setPercentageResult(result);
  };

  return (
    <section id="converter" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card className="shadow-lg border-0 bg-white rounded-2xl overflow-hidden">
        <Tabs defaultValue="cgpa-to-percentage" className="w-full">
          <TabsList className="grid w-full grid-cols-2 h-auto p-0 bg-transparent border-b border-gray-200 rounded-none">
            <TabsTrigger 
              value="cgpa-to-percentage" 
              className="flex-1 py-4 px-6 text-center font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-primary/5 rounded-none border-b-2 border-transparent"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              CGPA to Percentage
            </TabsTrigger>
            <TabsTrigger 
              value="percentage-to-cgpa"
              className="flex-1 py-4 px-6 text-center font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:bg-primary/5 rounded-none border-b-2 border-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Percentage to CGPA
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cgpa-to-percentage" className="p-8 mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enter Your CGPA</h3>
                
                <form onSubmit={cgpaForm.handleSubmit(onCgpaSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cgpa-scale">Select CGPA Scale</Label>
                    <Select 
                      value={cgpaForm.watch("scale")} 
                      onValueChange={(value) => cgpaForm.setValue("scale", value as any)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(scaleInfo).map(([value, info]) => (
                          <SelectItem key={value} value={value}>
                            {info.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cgpa-value">Your CGPA</Label>
                    <Input
                      id="cgpa-value"
                      type="number"
                      step="0.01"
                      min="0"
                      max={scaleInfo[cgpaForm.watch("scale")]?.max || 10}
                      placeholder="e.g., 8.5"
                      {...cgpaForm.register("cgpa", { valueAsNumber: true })}
                      className="text-lg"
                    />
                    {cgpaForm.formState.errors.cgpa && (
                      <p className="text-sm text-destructive">{cgpaForm.formState.errors.cgpa.message}</p>
                    )}
                    <p className="text-xs text-gray-500">Enter your CGPA (up to 2 decimal places)</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="conversion-standard">Conversion Standard</Label>
                    <Select 
                      value={cgpaForm.watch("conversionStandard")} 
                      onValueChange={(value) => cgpaForm.setValue("conversionStandard", value as any)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(conversionStandards).map(([value, label]) => (
                          <SelectItem key={value} value={value}>
                            {label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                    <Calculator className="w-4 h-4 mr-2" />
                    Convert to Percentage
                  </Button>
                </form>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conversion Result</h3>
                
                <Card className="bg-gradient-to-br from-secondary/10 to-green-50 border border-secondary/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Your Percentage</p>
                      <p className="text-4xl font-bold text-secondary">
                        {cgpaResult ? `${cgpaResult.result}%` : "85.00%"}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {cgpaResult ? cgpaResult.grade : "Grade: A"}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {cgpaResult && (
                  <Card className="bg-gray-50 border border-gray-200">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Formula Used:</h4>
                      <p className="text-sm text-gray-600 font-mono bg-white px-3 py-2 rounded border">
                        {cgpaResult.formula}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        *{cgpaResult.note}
                      </p>
                    </CardContent>
                  </Card>
                )}

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Quick Reference (10.0 Scale):</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {quickReferenceData.map((item, index) => (
                      <div key={index} className="flex justify-between bg-gray-50 px-3 py-2 rounded">
                        <span>{item.cgpa} CGPA</span>
                        <span className="font-medium">{item.percentage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="percentage-to-cgpa" className="p-8 mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enter Your Percentage</h3>
                
                <form onSubmit={percentageForm.handleSubmit(onPercentageSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="percentage-value">Your Percentage</Label>
                    <Input
                      id="percentage-value"
                      type="number"
                      step="0.01"
                      min="0"
                      max="100"
                      placeholder="e.g., 85.5"
                      {...percentageForm.register("percentage", { valueAsNumber: true })}
                      className="text-lg"
                    />
                    {percentageForm.formState.errors.percentage && (
                      <p className="text-sm text-destructive">{percentageForm.formState.errors.percentage.message}</p>
                    )}
                    <p className="text-xs text-gray-500">Enter your percentage (0-100)</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="target-scale">Target CGPA Scale</Label>
                    <Select 
                      value={percentageForm.watch("targetScale")} 
                      onValueChange={(value) => percentageForm.setValue("targetScale", value as any)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(scaleInfo).map(([value, info]) => (
                          <SelectItem key={value} value={value}>
                            {info.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3">
                    <Calculator className="w-4 h-4 mr-2" />
                    Convert to CGPA
                  </Button>
                </form>
              </div>

              {/* Results Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conversion Result</h3>
                
                <Card className="bg-gradient-to-br from-primary/10 to-blue-50 border border-primary/20">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-2">Your CGPA</p>
                      <p className="text-4xl font-bold text-primary">
                        {percentageResult ? percentageResult.result.toFixed(2) : "8.50"}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        On {scaleInfo[percentageForm.watch("targetScale")]?.name || "10.0 Scale"}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {percentageResult && (
                  <Card className="bg-gray-50 border border-gray-200">
                    <CardContent className="pt-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Formula Used:</h4>
                      <p className="text-sm text-gray-600 font-mono bg-white px-3 py-2 rounded border">
                        {percentageResult.formula}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        *{percentageResult.note}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </section>
  );
}
