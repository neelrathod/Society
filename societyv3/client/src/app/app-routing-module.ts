import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { LoginComponent } from "./user/login/login.component";
import { SignupComponent } from "./user/signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { AdminComponent } from "./admin/admin.component";
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { ListComponent } from "./vehicles/list/list.component";
import { AddComponent } from "./vehicles/add/add.component";


const appRoutes : Routes =[
    { path: '', component : LoginComponent },
    { path: 'signup', component: SignupComponent},  
    {path: 'header', component : HeaderComponent, children: [
        {path : 'vehicles', component : VehiclesComponent},
        {path: 'list', component : ListComponent},
        {path: 'add', component: AddComponent}
    ]},
    {path: 'admin', component : AdminComponent}
    
        
    

    
  ];
  
@NgModule({
    imports:[
        // RouterModule.forRoot(appRoutes, {useHash: true})

        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {
    
}