console.log('Welcome to Holberton School, what is your name?');
// Enabling the process to start accepting input
process.stdin.resume();
// Attaching an event listener to handle when input becomes available
process.stdin.on('readable', () => {
  const name = process.stdin.read(); // Retrieve the entered input
  process.stdout.write(`Your name is: ${name}`); // Display the user's input
  // Determining if the input is provided interactively via the terminal
  if (process.stdin.isTTY) {
    process.exit(); // Exit immediately if in an interactive session
  } else {
    // Notifying a user about the application closing and then terminate
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});
