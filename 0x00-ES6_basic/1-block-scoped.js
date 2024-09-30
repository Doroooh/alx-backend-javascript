// Default export function that demonstrates variable scope with block statements
export default function taskBlock(trueOrFalse) {
  const task = false; // Declare a constant variable 'task' initialized to false
  const task2 = true; // Declare a constant variable 'task2' initialized to true

  // Check the value of trueOrFalse to determine if the block should execute
  if (trueOrFalse) {
    const task = true; // Declare a new 'task' variable in this block scope, shadowing the outer 'task'
    const task2 = false; // Declare a new 'task2' variable in this block scope, shadowing the outer 'task2'
    // eslint-disable-line no-unused-vars disables the unused variable warning for this line
  }

  // Return an array containing the outer 'task' and 'task2' values
  return [task, task2];
}
