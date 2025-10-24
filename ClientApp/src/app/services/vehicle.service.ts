import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle.model'; // Importa nosso modelo

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  // A URL base da sua API .NET (que está rodando em localhost:5000)
  private apiUrl = 'http://localhost:5000/api/vehicles'; 

  constructor(private http: HttpClient) { }

  // Método para buscar todos os veículos
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  // (Aqui você adicionará os métodos createVehicle, updateVehicle, deleteVehicle, etc.)
}