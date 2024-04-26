// Define a class named Building
export default class Building {
  // Constructor function that takes a parameter named sqft
  constructor(sqft) {
    // Set the _sqft property to the value of sqft
    this._sqft = sqft;

    // Check if the current class is not the Building class itself
    // and if the evacuationWarningMessage property is not defined in the current class
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      // Throw an error if the above condition is true
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  // Getter function for the sqft property
  get sqft() {
    return this._sqft;
  }
}
