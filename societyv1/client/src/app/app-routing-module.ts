import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { LoginComponent } from "./user/login/login.component";
import { SignupComponent } from "./user/signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { AdminComponent } from "./admin/admin.component";
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { ListComponent } from "./vehicles/list/list.component";
import { AddComponent } from "./vehicles/add/add.component";
import { MyvehicleComponent } from "./vehicles/myvehicle/myvehicle.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FeedComponent } from "./feed/feed.component";
import { AuthGuard } from "./services/auth-guard.service";
import { EditComponent } from "./vehicles/edit/edit.component";



const appRoutes : Routes =[
    { path: '', component : LoginComponent },
    { path: 'signup', component: SignupComponent},  
    {path: 'header', component : HeaderComponent, children: [
        {path: 'admin',component : AdminComponent},       
        {path: 'list', component : ListComponent},
        {path: 'add',component: AddComponent},
        {path : 'vehicles', component : VehiclesComponent},
        {path : 'myvehicle/:id',component : MyvehicleComponent},
        {path: 'edit',component: EditComponent},
        {path: 'feeds', component : FeedComponent}
    ]},
    
    {path : '**', component : PageNotFoundComponent}
    
        
    

    
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