import { Injectable } from '@angular/core';

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

    getUser() {
        return '';
    }
}
