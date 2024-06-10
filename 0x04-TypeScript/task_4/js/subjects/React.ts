// Create a file React.ts and write a React Class in the same namespace.

// Add a new attribute experienceTeachingReact? (number) to the Teacher interface
// In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
// Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher

// task_4/js/subjects/React.ts

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return "Here is the list of requirements for React";
    }

    getAvailableTeacher(): string {
      if (this._teacher && this._teacher.experienceTeachingReact !== undefined) {
        return `Available Teacher: ${this._teacher.firstName}`;
      } else {
        return "No available teacher";
      }
    }
  }
}
