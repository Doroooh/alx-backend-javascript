// Importing signUpUser and uploadPhoto functions from their respective modules
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Exporting the function handleProfileSignup as the default export
// This function takes three arguments: firstName, lastName, and fileName
export default function handleProfileSignup(firstName, lastName, fileName) {
  /**
   * allSettled() creates a Promise that is resolved after all of the provided Promises
   * have settled, meaning they either resolved or rejected. It returns an array
   * of objects representing the outcome of each Promise.
   * This allows handling both successes and failures in one unified array of results.
   */
  return Promise
    // Call the signUpUser() and uploadPhoto() functions, passing the respective arguments
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    
    // When all promises have settled (either fulfilled or rejected),
    // the results are mapped to a new array with the following structure:
    .then((results) => (
      results.map((out) => ({
        // For each result, include the status of the promise (either 'fulfilled' or 'rejected')
        status: out.status,
        // If the promise was fulfilled, include the value; if rejected, include the error message
        value: out.status === 'fulfilled' ? out.value : String(out.reason),
      }))
    ));
}
