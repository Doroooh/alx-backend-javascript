// Exporting a function called signUpUser as the default export
// Function takes two arguments: firstName and lastName
export default function signUpUser(firstName, lastName) {
  // Returning a new Promise that resolves immediately
  return new Promise((resolve) => {
    // Resolving the promise with an object containing firstName and lastName
    resolve({
      firstName,
      lastName,
    });
  });
}
