export class VehicleModel {
    id: number;
    make: string;
    model: string;
    year: number;
    licensePlate: string;

    constructor(id: number, make: string, model: string, year: number, licensePlate: string) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
    }
}