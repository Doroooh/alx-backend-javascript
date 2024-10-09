namespace Subjects {
  // Defining an interface for Teacher with an optional property 'experienceTeachingC'
  export interface Teacher {
    experienceTeachingC?: number;  // Optional number of years of experience teaching C
  }

  // Class Cpp extends the base Subject class (assumed to exist in the Subjects namespace)
  export class Cpp extends Subjects.Subject {
    // Method to get the requirements for Cpp
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';  // Returns a message with the requirements for Cpp
    }

    // Method to get the available teacher for Cpp
    getAvailableTeacher(): string {
      // Check if there is no teacher or if the teacher has no experience teaching C
      if (!this.teacher || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher';  // Return message indicating no teacher is available
      }
      // Return the teacher's first name if they have experience teaching C
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
