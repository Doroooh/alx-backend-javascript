// Default export function to append a string to each value in an array
export default function appendToEachArrayValue(array, appendString) {
  // Iterating ver every value in the array using a for...of loop
  for (const value of array) {
    // Getting index of the current value in the array
    const idx = array.indexOf(value);
    
    // Updating array at the found index by prepending appendString to the current value
    // eslint-disable-line no-param-reassign allows modifying the parameter directly
    array[idx] = appendString + value;
  }

  // Returning modified array
  return array;
}
