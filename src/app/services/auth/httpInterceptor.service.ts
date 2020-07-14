import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService, LOGIN_API_ROUTE, REGISTER_API_ROUTE} from './auth.service';
import {Router} from '@angular/router';
import {catchError, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';


@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (LOGIN_API_ROUTE !== req.url && REGISTER_API_ROUTE !== req.url ) {
            return this.authService.getAccessToken().pipe(
                mergeMap((accessToken: string) => {
                    const reqAuth = req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } });
                    return next.handle(reqAuth);
                }),
                catchError((err) => {
                    console.error(err);
                    this.router.navigate(['/login']);
                    return throwError(err);
                })
            );
        } else {
            return next.handle(req);
        }
    }
}
