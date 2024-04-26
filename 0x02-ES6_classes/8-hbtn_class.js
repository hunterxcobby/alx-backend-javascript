export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Setter & Getter for size
  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = size;
  }

  get size() {
    return this._size;
  }

  // Setter & Getter for location
  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._location = location;
  }

  get location() {
    return this._location;
  }

  // Custom methods for valueOf and toString
  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
