import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginDto, RegisterDto } from 'src/app/types';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private authService: AuthService,
    ) { }

    login(loginDto: LoginDto): Observable<any> {
        return of({});
    }

    logout(): Observable<any> {
        return of({});
    }

    register(registerDto: RegisterDto): Observable<any> {
        return of({});
    }
}
