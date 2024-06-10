// ./task_1/main.ts

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key : string]: any; // index signature for allowing additional properties
}

// Define the Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}.${lastName}`;
}

// Define the Student interface
interface classInterface{
	firstName :string;
	lastName: string;
	workOnHomework ():string
	displayName(): string
}

class StudentClass implements classInterface{
	firstName:string
	lastName:string
	constructor(firstname:string, lastName:string){
		this.firstName= firstname
		this.lastName =lastName
	}

	workOnHomework():string{
		return `Currently working`
	}

	displayName():string{
		return this.firstName
	}
}

const student = new StudentClass("Ayomide", "Kay");
console.log(student.displayName())
console.log(student.workOnHomework())
