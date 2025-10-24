import { Component, OnInit } from "@angular/core";
import { VehicleService } from "../../services/vehicle.service"; // Importa o serviço
import { Vehicle } from "../../models/vehicle.model"; // Importa o modelo

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.css"],
})
export class VehicleListComponent implements OnInit {
  // Adiciona 'implements OnInit'

  vehicles: Vehicle[] = []; // Uma lista para guardar os veículos

  // Injeta o serviço no construtor
  constructor(private vehicleService: VehicleService) {}

  // ngOnInit é chamado quando o componente é carregado
  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(
      (data: Vehicle[]) => {
        this.vehicles = data;
        console.log(this.vehicles); // Para vermos no console do navegador
      },
      (error) => {
        console.error("Erro ao buscar veículos:", error);
      }
    );
  }
}
