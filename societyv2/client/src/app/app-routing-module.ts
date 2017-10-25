import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { LoginComponent } from "./user/login/login.component";
import { SignupComponent } from "./user/signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { AdminComponent } from "./admin/admin.component";


const appRoutes : Routes =[
    { path: '', component : LoginComponent },
    { path: 'signup', component: SignupComponent},  
    {path: 'header', component : HeaderComponent},
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