// Export function called getResponseFromAPI as default export
export default function getResponseFromAPI() {
  // Return a new Promise object
  return new Promise(() => {
    // This could also be written as:
    // return new Promise(function(resolve, reject) {}) works too

    // Inside the Promise, normally fetch some data or make a request
    // For example, you might use fetch() or axios() to get data from an API

    // If request successful, call the resolve() function
    // and pass the retrieved data to it

    // If there's an error, call reject() and pass the error through
  });
}
