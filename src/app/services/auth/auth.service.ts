import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {StorageService} from '../utils/storage.service';
import ValidationError from '../../../shared/validation';
import {environment} from '../../../environments/environment';
import {User} from '../../models/user.model';
import {catchError, map} from 'rxjs/operators';



export const LOGIN_API_ROUTE = environment.api_url + '/auth/login';
export const REGISTER_API_ROUTE = environment.api_url + '/auth/register';
const REFRESH_API_ROUTE = environment.api_url + '/auth/refresh';


class LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}

class RegisterResponse {
    accessToken: string;
    refreshToken: string;
    user: User;
}

class RefreshResponse {
    accessToken: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private jwt: JwtHelperService = new JwtHelperService();
    private authStatus: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuthenticated());
    constructor(private httpClient: HttpClient) {}

    errorHandler(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error(`authentication error': ${error.error.message}`);
        } else {
            console.error(error);
            console.error(`bad auth response: ${error.status}: ${error.statusText} ${JSON.stringify(error.error)}`);
            const validationError = new ValidationError();
            validationError.records(error.error);
            return throwError(validationError);
        }
        return throwError('authentication attempt failed');
    }

    // subscribe to get authentication status updates
    subscribe(next: (status: boolean) => void) {
        this.authStatus.subscribe(next);
    }

    login(email: string, password: string) {
        console.log(email);
        return this.httpClient.post<LoginResponse>(LOGIN_API_ROUTE, {email, password}).pipe(
            map(response => {

                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('refreshToken', response.refreshToken);
                localStorage.setItem('user', JSON.stringify(response.user));
            }),
            catchError(this.errorHandler)
        );
    }

    register(email: string, password: string, firstName: string, lastName: string) {

        return this.httpClient.post<RegisterResponse>(REGISTER_API_ROUTE, { email, password, firstName, lastName}).pipe(
            map(response => {

                localStorage.setItem('accessToken', response.accessToken);
                localStorage.setItem('refreshToken', response.refreshToken);
                localStorage.setItem('user', JSON.stringify(response.user));
            }),
            catchError(this.errorHandler)
        );
    }

    logout() {
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
        window.localStorage.removeItem('user');
        window.localStorage.clear();
        this.authStatus.next( false);
    }

    getAuthenticateUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    // Get access token, automatically refresh if necessary
    getAccessToken(): Observable<string> {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        if (!this.jwt.isTokenExpired(accessToken)) {
            return new BehaviorSubject(accessToken);
        } else if (!this.jwt.isTokenExpired(refreshToken)) {
            console.log('refreshing access token');
            const opts = {
                headers: new HttpHeaders({
                    Authorization: 'Bearer ' + refreshToken
                })
            };
            const user = this.getAuthenticateUser();
            const email = user.email;
            const password = user.password;
            return this.httpClient.post<RefreshResponse>(REFRESH_API_ROUTE, {email, password}, opts).pipe(
                map(response => {
                    localStorage.setItem('accessToken', response.accessToken);
                    return response.accessToken;
                }),
                catchError(this.errorHandler)
            );
        } else {
            return throwError('refresh token is expired');
        }
    }

    // User is logged in
    isAuthenticated(): boolean {
        return localStorage.getItem('user') !== null && this.jwt.isTokenExpired(localStorage.getItem('refreshToken')) === false;
    }

    isClient(): boolean {
        const user = JSON.parse(this.getAuthenticateUser());
        return user.roles === 'ROLE_USER';
    }
}
