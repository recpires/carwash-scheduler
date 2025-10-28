export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  licensePlate: string;
}

export class VehicleModel implements Vehicle {
  id = 0;
  make = "";
  model = "";
  year = new Date().getFullYear();
  licensePlate = "";

  constructor(init?: Partial<Vehicle>) {
    Object.assign(this, init);
  }
}
