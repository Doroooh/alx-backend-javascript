namespace Subjects {
  // Base class Subject that can be extended by specific subjects (e.g., Cpp, Java, React)
  export class Subject {
    teacher: Subjects.Teacher;  // Property to hold the teacher assigned to the subject

    // Setter method to assign a teacher to the subject
    set setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;  // Assign the provided teacher to the teacher property
    }
  }
}
