import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from "@angular/router";
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute) { }



    canActivate() {
        var adminAccess = localStorage.getItem('adminAccess')
        console.log(adminAccess)

        if (adminAccess == '1') {
            this.router.navigate(['/header/admin'], { relativeTo: this.route })
    //  console.log("Admin is here")
        }
        return true;
    }

}


// if(localStorage.getItem('adminAccess')){
//     this.router.navigate(['/header/admin'], { relativeTo: this.route })
// }