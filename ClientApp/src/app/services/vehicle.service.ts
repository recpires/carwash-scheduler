import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vehicle } from "../models/vehicle.model";

@Injectable({
  providedIn: "root",
})
export class VehicleService {
  private apiUrl = "http://localhost:5000/api/vehicles";

  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  // --- ADICIONE ESTE MÉTODO ---
  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    // Envia um POST para http://localhost:5000/api/vehicles
    // com o objeto 'vehicle' no corpo da requisição
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }
}
