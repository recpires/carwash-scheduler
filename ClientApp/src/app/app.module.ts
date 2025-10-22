import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulingService } from './services/scheduling.service';

@NgModule({
  declarations: [
    AppComponent,
    VehicleListComponent,
    ScheduleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SchedulingService],
  bootstrap: [AppComponent]
})
export class AppModule { }