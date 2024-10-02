// Export function called getFullResponseFromAPI as default export
// The function takes one argument, success, which determines if the API call is successful or not
export default function getFullResponseFromAPI(success) {
  // Return a new Promise object which takes two arguments: resolve and reject
  return new Promise((resolve, reject) => {
    // Check if the success parameter is true
    if (success) {
      // If success is true, resolve the Promise by passing an object
      // with status code 200 and a message of 'Success'
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If success is false, reject the Promise and pass an Error object
      // with the message 'The fake API is not working currently'
      reject(
        new Error('The fake API is not working currently'),
      );
    }
  });
}
