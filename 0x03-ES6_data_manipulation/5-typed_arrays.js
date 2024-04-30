// This function creates a new Int8 typed array with the specified length,
// sets a value at a given position, and returns the typed array.
// If the position is outside the range of the typed array, the function throws an error.

export default function createInt8TypedArray(length, position, value) {
  // Check if the position is outside the range of the typed array
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView object to manipulate the ArrayBuffer
  const intView = new DataView(buffer);

  // Set the value at the specified position in the Int8 typed array
  intView.setInt8(position, value);

  // Return the Int8 typed array
  return intView;
}
