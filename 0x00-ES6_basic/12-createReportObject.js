#!/usr/bin/node

// Write a function named createReportObject whose parameter, employeesList,
// is the return value of the previous function createEmployeesObject.

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
