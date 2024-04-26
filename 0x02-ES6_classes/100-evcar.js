import Car from './10-car';

// Define the EVCar class that extends the Car class
export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the parent class constructor using the super keyword
    super(brand, motor, color);
    this._range = range; // Set the range property of the EVCar instance
  }

  // Define a getter for the range property
  get range() {
    return this._range;
  }

  // Define a method to clone the EVCar instance
  cloneCar() {
    // Create a new Car instance with the same brand, motor, and color
    return new Car(this._brand, this._motor, this._color);
  }
}
