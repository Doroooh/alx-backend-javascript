// Import createUser and uploadPhoto functions from the utils module
import { createUser, uploadPhoto } from './utils';

// Export a function called handleProfileSignup as the default export
export default function handleProfileSignup() {
  // Call uploadPhoto() and createUser(), then wait for both promises to resolve
  // Promise.all() ensures that both promises are fulfilled before proceeding
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((userResp) => {
      // If both promises resolve successfully, log the photo body,
      // user's first name, and last name to the console
      console.log(`${userResp[0].body} ${userResp[1].firstName} ${userResp[1].lastName}`);
    })
    .catch(() => {
      // If any promise fails (either uploadPhoto or createUser), catch the error
      // and log 'Signup system offline' to the console
      console.log('Signup system offline');
    });
}
