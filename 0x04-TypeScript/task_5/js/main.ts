// task_5/js/main.ts

// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: string; // Unique identifier for MajorCredits
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: string; // Unique identifier for MinorCredits
}

// Define the sumMajorCredits function
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MajorCredits' };
}

// Define the sumMinorCredits function
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'MinorCredits' };
}
