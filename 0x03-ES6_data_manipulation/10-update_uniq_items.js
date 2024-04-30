export default function updateUniqueItems(map) {
  // check if map is an instance of Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // iterate over each item in the map
  map.forEach((quantity, item) => {
    // check if the quantity of the item is 1
    if (quantity === 1) {
      // update the quantity of the item to 100
      map.set(item, 100);
    }
  });
}
