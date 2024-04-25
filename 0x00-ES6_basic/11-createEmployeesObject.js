#!/usr/bin/node

// Write a function named createEmployeesObject that will receive two arguments:
// departmentName (String)
// employees (Array of Strings)

export default function createEmployeesObject(departmentName, employees) {
  return {
    [`${departmentName}`]: employees,
  };
}
