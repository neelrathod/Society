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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [SignupService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
