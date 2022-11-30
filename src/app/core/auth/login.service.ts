import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { LoginRequest, LoginResponse, LoginService as LoginApi, RegisterRequest, RegisterService as RegisterApi } from 'src/app/sdk';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private authService: AuthService,
        private loginApi: LoginApi,
        private registerApi: RegisterApi,
    ) { }

    login(loginRequest: LoginRequest): Observable<LoginResponse> {
        // TODO: set token stb
        return this.loginApi.apiLoginPost(loginRequest);
    }

    logout(): Observable<any> {
        return this.loginApi.apiLoginDelete();
    }

    register(registerRequest: RegisterRequest): Observable<any> {
        return this.registerApi.apiRegisterPost(registerRequest);
    }
}
