function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    if (firstName && lastName) {
      resolve({
        firstName,
        lastName,
      });
    }
  });
}

export default signUpUser;
