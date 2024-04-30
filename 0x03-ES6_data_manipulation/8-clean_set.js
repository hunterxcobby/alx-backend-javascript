export default function cleanSet(set, startString) {
  let str = '';

  // Check if the startString is empty, if so, return an empty string
  if (startString === '') {
    return '';
  }

  // Iterate over each item in the set
  for (const item of set) {
    // Check if the set is an instance of Set and the startString is a string
    if (set instanceof Set && typeof startString === 'string') {
      // Check if the item starts with the startString
      if (item && item.startsWith(startString)) {
        // Get the substring of the item after the startString
        const strSlice = item.slice(startString.length);

        // Add a hyphen to the string if it's not the first item
        if (str !== '') {
          str += '-';
        }

        // Append the substring to the string
        str += strSlice;
      }
    }
  }

  // Return the final cleaned string
  return str;
}
