// Exporting a function called uploadPhoto as the default export
// The function takes one argument: filename, which represents the name of the photo to upload
export default function uploadPhoto(filename) {
  // Returning a new Promise that is immediately rejected
  return new Promise((resolve, reject) => {
    // Reject the promise with an Error object containing the message that the filename cannot be processed
    reject(new Error(`${filename} cannot be processed`));
  });
}
