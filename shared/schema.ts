import { z } from "zod";

export const conversionFormSchema = z.object({
  value: z.number().min(0, "Value must be positive"),
  fromScale: z.enum(["4", "5", "7", "10"]),
  toScale: z.enum(["4", "5", "7", "10"]),
  conversionStandard: z.enum(["standard", "indian", "us", "uk", "canada"]),
});

export const cgpaToPercentageSchema = z.object({
  cgpa: z.number().min(0).max(10, "CGPA cannot exceed maximum scale"),
  scale: z.enum(["4", "5", "7", "10"]),
  conversionStandard: z.enum(["standard", "indian", "us", "uk", "canada"]),
});

export const percentageToCgpaSchema = z.object({
  percentage: z.number().min(0).max(100, "Percentage must be between 0 and 100"),
  targetScale: z.enum(["4", "5", "7", "10"]),
  conversionStandard: z.enum(["standard", "indian", "us", "uk", "canada"]),
});

export type ConversionForm = z.infer<typeof conversionFormSchema>;
export type CgpaToPercentageForm = z.infer<typeof cgpaToPercentageSchema>;
export type PercentageToCgpaForm = z.infer<typeof percentageToCgpaSchema>;

export interface ConversionResult {
  result: number;
  formula: string;
  grade: string;
  note: string;
}
