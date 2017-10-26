import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { SignupComponent } from './user/signup/signup.component';
import { SignupService } from './services/signup.service';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { AppRoutingModule } from './app-routing-module';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './services/admin.service';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ListComponent } from './vehicles/list/list.component';
import { AddComponent } from './vehicles/add/add.component';
import { VehicleService } from './services/vehicle.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,
    VehiclesComponent,
    ListComponent,
    AddComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [SignupService, AdminService, VehicleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
