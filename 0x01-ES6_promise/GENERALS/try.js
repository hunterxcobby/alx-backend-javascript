function divide(a, b) {
    if (b === 0) {
      throw 'Division by zero!';
    }
    return a / b;
  }
  
  try {
    console.log(divide(6, 2)); // Output: 3
    console.log(divide(6, 0)); // Throws an error: Division by zero!
  } catch (error) {
    console.error(error);
  }