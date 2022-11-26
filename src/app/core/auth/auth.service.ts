import { Injectable } from '@angular/core';
import { GetUserDto } from 'src/app/types';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    clear() {

    }

    getAccessToken(): string {
        return /*this.token ? this.token :*/ '';
    }

    getUser(): GetUserDto {
        // return {
        //     id: '121321',
        //     username: '',
        //     firstname: '',
        //     lastname: '',
        //     isAdmin: true,
        // };
        return null;
    }
}
