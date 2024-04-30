// Function to check if all elements in the array are present in the set
function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}

// export function as default of this module
export default hasValuesFromArray;
