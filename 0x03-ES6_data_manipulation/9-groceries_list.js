export default function groceriesList() {
  // Create a new Map to store the groceries
  const groceriesMap = new Map();

  // Add groceries to the map with their quantities
  groceriesMap.set('Apple', 10); // 10 Apples
  groceriesMap.set('Tomatoes', 10); // 10 Tomatoes
  groceriesMap.set('Pasta', 1); // 1 Pasta
  groceriesMap.set('Rice', 1); // 1 Rice
  groceriesMap.set('Banana', 5); // 5 Bananas

  // Return the groceries map
  return groceriesMap;
}
