export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // setter for name
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  // getter for name
  get name() {
    return this._name;
  }

  // setter for length
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  // getter for length
  get length() {
    return this._length;
  }

  // setter for students
  set students(students) {
    if (
      !Array.isArray(students)
      || students.every((student) => typeof student !== 'string')
    ) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  // getter for students
  get students() {
    return this._students;
  }
}
