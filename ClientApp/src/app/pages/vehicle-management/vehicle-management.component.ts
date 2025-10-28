// 1. Importe ViewChild e o componente da lista
import { Component, OnInit, ViewChild } from "@angular/core";
import { VehicleListComponent } from "../../components/vehicle-list/vehicle-list.component";

@Component({
  selector: "app-vehicle-management",
  templateUrl: "./vehicle-management.component.html",
  styleUrls: ["./vehicle-management.component.css"],
})
export class VehicleManagementComponent implements OnInit {
  // 2. Pega a referência #list do HTML e a associa à variável 'vehicleList'
  @ViewChild("list") vehicleList: VehicleListComponent;

  constructor() {}

  ngOnInit(): void {}

  // 3. Este método é chamado quando o formulário emite (vehicleSaved)
  onVehicleSaved(): void {
    console.log("Evento vehicleSaved capturado pelo pai!");

    // 4. CHAMA O MÉTODO PÚBLICO DO COMPONENTE FILHO!
    this.vehicleList.refresh();
  }
}
