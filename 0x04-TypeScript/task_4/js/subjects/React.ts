namespace Subjects {
  // Defining an interface for Teacher with an optional property 'experienceTeachingReact'
  export interface Teacher {
    experienceTeachingReact?: number;  // Optional number of years of experience teaching React
  }

  // Class React extends the base Subject class (assumed to exist in the Subjects namespace)
  export class React extends Subjects.Subject {
    // Method to get the requirements for React
    getRequirements(): string {
      return 'Here is the list of requirements for React';  // Returns a message with the requirements for React
    }

    // Method to get the available teacher for React
    getAvailableTeacher(): string {
      // Check if there is no teacher or if the teacher has no experience teaching React
      if (!this.teacher || this.teacher.experienceTeachingReact <= 0) {
        return 'No available teacher';  // Return message indicating no teacher is available
      }
      // Return the teacher's first name if they have experience teaching React
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
