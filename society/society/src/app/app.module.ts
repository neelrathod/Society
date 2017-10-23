import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { SignupComponent } from './users/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
