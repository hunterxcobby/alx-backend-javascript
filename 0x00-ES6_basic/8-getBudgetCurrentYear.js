#!/usr/bin/node

// Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the
// budget object to return the budget for the current year.

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]: gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
