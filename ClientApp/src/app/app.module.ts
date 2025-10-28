import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router"; // Se você usa o app-routing.module, isso pode ser redundante, mas não tem problema
import { CommonModule } from "@angular/common"; // <-- MUITO IMPORTANTE: Corrige o erro do pipe 'async'
import { ReactiveFormsModule } from "@angular/forms"; // <-- MUITO IMPORTANTE: Para o vehicle-form
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // <-- MUITO IMPORTANTE: Para o Material

// Módulos do Angular Material
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table"; // <-- MUITO IMPORTANTE: Corrige o erro do 'dataSource'
import { MatIconModule } from "@angular/material/icon";

// Componente Principal
import { AppComponent } from "./app.component";

// Nossos 3 novos componentes
import { VehicleManagementComponent } from "./pages/vehicle-management/vehicle-management.component";
import { VehicleFormComponent } from "./components/vehicle-form/vehicle-form.component";
import { VehicleListComponent } from "./components/vehicle-list/vehicle-list.component";

// Seu módulo de rotas (se o nome for esse)
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,

    // Declarando nossos 3 novos componentes
    VehicleManagementComponent,
    VehicleFormComponent,
    VehicleListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    AppRoutingModule, // Certifique-se que o nome do arquivo é esse
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Importando todos os módulos do Material
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
