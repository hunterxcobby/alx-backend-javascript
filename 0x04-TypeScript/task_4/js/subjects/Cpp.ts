// create file Cpp.ts and make the following modifications in the same namespace.

// Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
// Create a class Cpp extending from Subject
// Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher

// task_4/js/subjects/Cpp.ts

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
      if (this._teacher && this._teacher.experienceTeachingC !== undefined) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
