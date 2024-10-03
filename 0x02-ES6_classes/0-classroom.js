/* eslint-disable no-underscore-dangle */
// This ESLint directive disables the rule that prevents the use of dangling underscores in variable names.
// It allows us to use variable names like _maxStudentsSize.

/**
 * Class representing a classroom.
 */
export default class ClassRoom {
  /**
   * Create a classroom.
   * @param {Number} maxStudentsSize - The maximum number of students allowed in the classroom.
   */
  constructor(maxStudentsSize) {
    // Initialize the maximum size of the classroom with the provided number.
    this._maxStudentsSize = maxStudentsSize;
  }
}
