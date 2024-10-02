// Importing uploadPhoto and createUser functions from the utils module
import { uploadPhoto, createUser } from './utils';

// Exporting an asynchronous function called asyncUploadUser as the default export
export default async function asyncUploadUser() {
  // Initialize an empty object to hold the results
  let result = {};
  
  // Using try block to attempt to execute the asynchronous operations
  try {
    // Await the result of uploadPhoto() and store it in the photo variable
    const photo = await uploadPhoto();
    
    // Await the result of createUser() and store it in the user variable
    const user = await createUser();
    
    // If both operations are successful, populate the result object with the photo and user data
    result = { photo, user };
  } catch (error) {
    // If any error occurs during the asynchronous operations, set photo and user to null in the result object
    result = { photo: null, user: null };
  }
  
  // Return the result object containing either the retrieved data or null values in case of an error
  return result;
}
