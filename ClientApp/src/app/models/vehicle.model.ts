export class Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  licensePlate: string;

  constructor() {
    this.id = 0;
    this.make = '';
    this.model = '';
    this.year = new Date().getFullYear();
    this.licensePlate = '';
  }
}