// ./task_2/main.ts

// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Define Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break"
  }

  workDirectorTasks(): string {
    return "Getting to director tasks"
  }
}

// Define Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home"
  }

  getCoffeeBreak(): string {
    return "Cannot have a break"
  }

  workTeacherTasks(): string {
    return "Getting to work"
  }
}

// Define the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test the createEmployee function
// console.log(createEmployee(200)); // Output: Teacher
// console.log(createEmployee(1000)); // Output: Director
// console.log(createEmployee('$500')); // Output: Director

// Define the isDirector type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Define the executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return (employee as Teacher).workTeacherTasks();
  }
}

// Test the executeWork function
// console.log(executeWork(createEmployee(200))); // Output: Getting to work
// console.log(executeWork(createEmployee(1000))); // Output: Getting to director tasks

// Define the Subjects string literal type
type Subjects = 'Math' | 'History';

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    throw new Error('Invalid subject');
  }
}

// Test the teachClass function
// console.log(teachClass('Math')); // Output: Teaching Math
// console.log(teachClass('History')); // Output: Teaching History
