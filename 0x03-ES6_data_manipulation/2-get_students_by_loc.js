// import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(students, city) {
  // const listOfStudents = getListStudents();

  // return listOfStudents.filter((student) => student.location === city);
  return students.filter((student) => student.location === city);
}
