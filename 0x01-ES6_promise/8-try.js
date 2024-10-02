// Exporting a function called divideFunction as the default export
// The function takes two arguments: numerator and denominator
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0, which would cause a division error
  if (denominator === 0) {
    // If the denominator is 0, throw an error with the message 'cannot divide by 0'
    throw new Error('cannot divide by 0');
  }
  // If the denominator is valid, return the result of dividing the numerator by the denominator
  return numerator / denominator;
}
