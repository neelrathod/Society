import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { SignupComponent } from './user/signup/signup.component';
import { UserService } from './services/user.service';
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
import { MyvehicleComponent } from './vehicles/myvehicle/myvehicle.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FeedComponent } from './feed/feed.component';
import { FeedListComponent } from "./feed/feedList/feedList.component";

import { AuthGuard } from './services/auth-guard.service';
import { EditComponent } from './vehicles/edit/edit.component';
import { FeedService } from './services/feed.service';
import { LogoutComponent } from './user/logout/logout.component';



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
    MyvehicleComponent,
    FileSelectDirective,
    PageNotFoundComponent,
    FeedComponent,
    FeedListComponent,
    EditComponent,
    LogoutComponent,



  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [UserService, AdminService, VehicleService, AuthGuard, FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
