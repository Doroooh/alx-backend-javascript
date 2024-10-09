// Interface representing MajorCredits with a branded type to distinguish it from other credit types
export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };  // Credits with a branding tag specific to MajorCredits
}

// Interface representing MinorCredits with a branded type to distinguish it from other credit types
export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };  // Credits with a branding tag specific to MinorCredits
}

// Function to sum two MajorCredits subjects
// Takes two subjects of type MajorCredits and returns their combined credits as MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;  // Sum the credits and cast the result as MajorCredits
}

// Function to sum two MinorCredits subjects
// Takes two subjects of type MinorCredits and returns their combined credits as MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;  // Sum the credits and cast the result as MinorCredits
}
