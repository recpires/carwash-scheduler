import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { VehicleService } from "../../services/vehicle.service"; // Ajuste o caminho se necessário
import { Vehicle } from "../../models/vehicle.model";
@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.css"],
})
export class VehicleListComponent implements OnInit {
  // 1. O $ no final indica que esta é uma variável Observable
  public vehicles$: Observable<Vehicle[]>;

  // 2. Define quais colunas a tabela vai mostrar e em qual ordem
  public displayedColumns: string[] = [
    "marca",
    "modelo",
    "ano",
    "placa",
    "acoes",
  ];

  // 3. Injeta o serviço
  constructor(private vehicleService: VehicleService) {}

  ngOnInit(): void {
    // 4. Carrega os veículos assim que o componente é inicializado
    this.loadVehicles();
  }

  // 5. Método público que pode ser chamado pelo componente "pai" para recarregar
  public refresh(): void {
    console.log("Recarregando lista de veículos...");
    this.loadVehicles();
  }

  private loadVehicles(): void {
    // 6. Atribui o Observable retornado pelo serviço à nossa variável
    // Assumindo que seu serviço tem um método 'getVehicles()'
    this.vehicles$ = this.vehicleService.getVehicles();
  }

  // 7. Métodos de Ação (por enquanto, só dão console.log)
  onEdit(vehicle: Vehicle): void {
    console.log("Editar:", vehicle);
    // TODO: Implementar lógica de edição
    // (Geralmente envolve emitir um evento para o 'vehicle-form')
  }

  onDelete(vehicle: Vehicle): void {
    console.log("Excluir:", vehicle);
    // TODO: Chamar o 'vehicleService.deleteVehicle(vehicle.id)'
    // e chamar this.refresh() no 'subscribe'
  }
}
