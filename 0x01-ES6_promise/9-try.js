// Exporting a function called guardrail as the default export
// The function takes one argument: mathFunction, which is expected to be a function that performs a mathematical operation
export default function guardrail(mathFunction) {
  // Initialize an empty array called queue to store results or errors
  const queue = [];

  // Use try block to attempt to execute the mathFunction
  try {
    // Push the result of the mathFunction into the queue
    queue.push(mathFunction());
  } catch (err) {
    // If an error occurs, push the error message (converted to a string) into the queue
    queue.push(String(err));
  } finally {
    // The final block runs regardless of whether the try block succeeded or failed
    // Push message indicating that the guardrail has been processed into the queue
    queue.push('Guardrail was processed');
  }

  // Returning queue array, which contains the result or error and the guardrail message
  return queue;
}
