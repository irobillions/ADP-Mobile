import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (this.authService.isAuthenticated() && this.authService.isClient() === true) {
            return true;
        } else {
            this.router.navigate(['/home']).then(() => {
                this.authService.logout();
            });
        }
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (this.authService.isAuthenticated() && this.authService.isClient() === true) {
            return true;
        } else {
            this.router.navigate(['/home']).then(() => {
                this.authService.logout();
            });
        }
    }
}
