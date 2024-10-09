namespace Subjects {
  // Defining an interface for Teacher with an optional property 'experienceTeachingJava'
  export interface Teacher {
    experienceTeachingJava?: number;  // Optional number of years of experience teaching Java
  }

  // Class Java extends the base Subject class (assumed to exist in the Subjects namespace)
  export class Java extends Subjects.Subject {
    // Method to get the requirements for Java
    getRequirements(): string {
      return 'Here is the list of requirements for Java';  // Returns a message with the requirements for Java
    }

    // Method to get the available teacher for Java
    getAvailableTeacher(): string {
      // Check if there is no teacher or if the teacher has no experience teaching Java
      if (!this.teacher || this.teacher.experienceTeachingJava <= 0) {
        return 'No available teacher';  // Return message indicating no teacher is available
      }
      // Return the teacher's first name if they have experience teaching Java
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
