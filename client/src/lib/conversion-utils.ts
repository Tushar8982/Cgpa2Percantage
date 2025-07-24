import { ConversionResult } from "@shared/schema";

export const scaleInfo = {
  "4": { name: "4.0 Scale (US/Canada)", max: 4.0 },
  "5": { name: "5.0 Scale (Germany)", max: 5.0 },
  "7": { name: "7.0 Scale (Australia)", max: 7.0 },
  "10": { name: "10.0 Scale (India)", max: 10.0 },
};

export const conversionStandards = {
  standard: "Standard Formula",
  indian: "Indian Universities",
  us: "US Universities",
  uk: "UK Universities",
  canada: "Canadian Universities",
};

export function cgpaToPercentage(
  cgpa: number,
  scale: string,
  standard: string = "standard"
): ConversionResult {
  let percentage: number;
  let formula: string;
  let note: string;

  switch (scale) {
    case "10":
      if (standard === "indian") {
        percentage = cgpa * 9.5;
        formula = "Percentage = CGPA × 9.5";
        note = "Formula commonly used by Indian universities";
      } else {
        percentage = (cgpa * 10) - 7.5;
        formula = "Percentage = (CGPA × 10) - 7.5";
        note = "Standard formula for 10.0 scale CGPA conversion";
      }
      break;
    case "4":
      percentage = (cgpa / 4) * 100;
      formula = "Percentage = (CGPA ÷ 4) × 100";
      note = "Standard formula for 4.0 scale GPA conversion";
      break;
    case "5":
      percentage = (5 - cgpa) * 20 + 20;
      formula = "Percentage = (5 - CGPA) × 20 + 20";
      note = "German grading system conversion (inverted scale)";
      break;
    case "7":
      percentage = (cgpa / 7) * 100;
      formula = "Percentage = (CGPA ÷ 7) × 100";
      note = "Australian grading system conversion";
      break;
    default:
      percentage = (cgpa * 10) - 7.5;
      formula = "Percentage = (CGPA × 10) - 7.5";
      note = "Default formula";
  }

  // Ensure percentage is within valid range
  percentage = Math.max(0, Math.min(100, percentage));

  const grade = getGradeFromPercentage(percentage, scale);

  return {
    result: Math.round(percentage * 100) / 100,
    formula,
    grade,
    note,
  };
}

export function percentageToCgpa(
  percentage: number,
  targetScale: string,
  standard: string = "standard"
): ConversionResult {
  let cgpa: number;
  let formula: string;
  let note: string;

  switch (targetScale) {
    case "10":
      if (standard === "indian") {
        cgpa = percentage / 9.5;
        formula = "CGPA = Percentage ÷ 9.5";
        note = "Reverse formula for Indian universities";
      } else {
        cgpa = (percentage + 7.5) / 10;
        formula = "CGPA = (Percentage + 7.5) ÷ 10";
        note = "Reverse of standard 10.0 scale formula";
      }
      break;
    case "4":
      cgpa = (percentage / 100) * 4;
      formula = "CGPA = (Percentage ÷ 100) × 4";
      note = "Reverse formula for 4.0 scale GPA";
      break;
    case "5":
      cgpa = 5 - ((percentage - 20) / 20);
      formula = "CGPA = 5 - ((Percentage - 20) ÷ 20)";
      note = "Reverse German grading system conversion";
      break;
    case "7":
      cgpa = (percentage / 100) * 7;
      formula = "CGPA = (Percentage ÷ 100) × 7";
      note = "Reverse Australian grading system conversion";
      break;
    default:
      cgpa = (percentage + 7.5) / 10;
      formula = "CGPA = (Percentage + 7.5) ÷ 10";
      note = "Default reverse formula";
  }

  const maxScale = parseFloat(targetScale);
  cgpa = Math.max(0, Math.min(maxScale, cgpa));

  const grade = getGradeFromCgpa(cgpa, targetScale);

  return {
    result: Math.round(cgpa * 100) / 100,
    formula,
    grade,
    note,
  };
}

function getGradeFromPercentage(percentage: number, scale: string): string {
  if (scale === "10") {
    if (percentage >= 90) return "O (Outstanding)";
    if (percentage >= 80) return "A+ (Excellent)";
    if (percentage >= 70) return "A (Very Good)";
    if (percentage >= 60) return "B+ (Good)";
    if (percentage >= 50) return "B (Average)";
    if (percentage >= 40) return "C (Below Average)";
    return "F (Fail)";
  }
  
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B+";
  if (percentage >= 60) return "B";
  if (percentage >= 50) return "C+";
  if (percentage >= 40) return "C";
  return "F";
}

function getGradeFromCgpa(cgpa: number, scale: string): string {
  if (scale === "10") {
    if (cgpa >= 9.0) return "O (Outstanding)";
    if (cgpa >= 8.0) return "A+ (Excellent)";
    if (cgpa >= 7.0) return "A (Very Good)";
    if (cgpa >= 6.0) return "B+ (Good)";
    if (cgpa >= 5.0) return "B (Average)";
    if (cgpa >= 4.0) return "C (Below Average)";
    return "F (Fail)";
  }

  if (scale === "4") {
    if (cgpa >= 3.7) return "A";
    if (cgpa >= 3.3) return "B+";
    if (cgpa >= 3.0) return "B";
    if (cgpa >= 2.7) return "B-";
    if (cgpa >= 2.3) return "C+";
    if (cgpa >= 2.0) return "C";
    return "F";
  }

  return "Grade: Good";
}

export const quickReferenceData = [
  { cgpa: "10.0", percentage: "92.5%", grade: "O (Outstanding)", gpa4: "4.0" },
  { cgpa: "9.0", percentage: "82.5%", grade: "A+ (Excellent)", gpa4: "3.6" },
  { cgpa: "8.0", percentage: "72.5%", grade: "A (Very Good)", gpa4: "3.2" },
  { cgpa: "7.0", percentage: "62.5%", grade: "B+ (Good)", gpa4: "2.8" },
  { cgpa: "6.0", percentage: "52.5%", grade: "B (Average)", gpa4: "2.4" },
];
