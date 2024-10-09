// Creating instances of the Cpp, Java, and React subjects from the Subjects namespace
export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

// Defining a Teacher object with relevant details
export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',              // Teacher's first name
  lastName: 'Ritchie',              // Teacher's last name
  experienceTeachingC: 10,          // Years of experience teaching C
};

// Working with C++ subject
console.log('C++');                  // Output subject name
cpp.setTeacher = cTeacher;           // Assign the teacher to the C++ subject
console.log(cpp.getRequirements());  // Output the C++ requirements
console.log(cpp.getAvailableTeacher()); // Output the available teacher for C++

// Working with Java subject
console.log('Java');                 // Output subject name
java.setTeacher = cTeacher;          // Assign the teacher to the Java subject
console.log(java.getRequirements()); // Output the Java requirements
console.log(java.getAvailableTeacher()); // Output the available teacher for Java

// Working with React subject
console.log('React');                // Output subject name
react.setTeacher = cTeacher;         // Assign the teacher to the React subject
console.log(react.getRequirements()); // Output the React requirements
console.log(react.getAvailableTeacher()); // Output the available teacher for React
