// Export function called handleResponseFromAPI as the default export
// The function takes a Promise as argument
export default function handleResponseFromAPI(promise) {
  // Return promise and handle response using then() and catch()
  return promise
    .then(() => {
      // When promise is successfully resolved, log message to console
      console.log('Got a response from the API');
      
      // Return object indicating success with status 200 and a message 'success'
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      // If promise is rejected, catch the error and return a new Error object
      return new Error();
    });
}
