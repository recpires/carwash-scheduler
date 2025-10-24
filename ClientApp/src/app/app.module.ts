import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { VehicleListComponent } from "./components/vehicle-list/vehicle-list.component";
import { ScheduleFormComponent } from "./components/schedule-form/schedule-form.component";

// Não precisamos importar os Serviços aqui se eles usam 'providedIn: "root"'

@NgModule({
  // ✅ DECLARAÇÕES: Lista todos os componentes que este módulo "possui"
  declarations: [AppComponent, VehicleListComponent, ScheduleFormComponent],

  // ✅ IMPORTS: Lista os outros módulos que este módulo "usa"
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // <-- A correção para o erro 'router-outlet'
  ],

  // (providers: [] está ok, pois os serviços estão em 'root')
  providers: [],

  // ✅ BOOTSTRAP: Diz ao Angular qual componente carregar primeiro
  bootstrap: [AppComponent],
})
export class AppModule {}
