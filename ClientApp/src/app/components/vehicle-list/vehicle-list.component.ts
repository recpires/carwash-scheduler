import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  vehicles: Vehicle[] = [];

  // 1. Objeto para guardar os dados do novo formulário
  newVehicle: Vehicle = new Vehicle(); 

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
      },
      (error) => {
        console.error('Erro ao buscar veículos:', error);
      }
    );
  }

  // 2. Método que é chamado quando o formulário é enviado
  onSubmit(): void {
    console.log('Enviando veículo:', this.newVehicle);

    this.vehicleService.addVehicle(this.newVehicle).subscribe(
      (savedVehicle) => {
        console.log('Veículo salvo:', savedVehicle);

        // 3. Atualiza a lista na tela e reseta o formulário
        this.loadVehicles(); // Recarrega a lista do banco
        this.newVehicle = new Vehicle(); // Limpa o formulário
      },
      (error) => {
        console.error('Erro ao salvar veículo:', error);
      }
    );
  }
}