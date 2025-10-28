import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// 1. IMPORTE O NOVO COMPONENTE
import { VehicleManagementComponent } from "./pages/vehicle-management/vehicle-management.component";

// Suas outras rotas (ex: HomeComponent) podem estar aqui
const routes: Routes = [
  // 2. ADICIONE A ROTA
  { path: "vehicles", component: VehicleManagementComponent },

  // 3. (OPCIONAL) Redirecione a rota raiz '' para a nova página
  { path: "", redirectTo: "/vehicles", pathMatch: "full" },

  // { path: 'outra-pagina', component: OutroComponente },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
