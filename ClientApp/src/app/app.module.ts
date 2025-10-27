import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { VehicleListComponent } from "./components/vehicle-list/vehicle-list.component";
import { ScheduleFormComponent } from "./components/schedule-form/schedule-form.component";

// Não precisamos importar os Serviços aqui se eles usam 'providedIn: "root"'

@NgModule({
  declarations: [AppComponent, VehicleListComponent, ScheduleFormComponent],

  // ✅ AQUI ESTÁ O 'imports' CORRIGIDO E ÚNICO
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
