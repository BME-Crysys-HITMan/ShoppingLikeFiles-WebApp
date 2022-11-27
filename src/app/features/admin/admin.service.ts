import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getUsers(): Observable<any> {
    return of([{id:'234',username: 'username', firstname: 'firstname', lastname: 'lastname', isAdmin: false}]);
  }

  getCaffs(): Observable<any> {
    return of([]);
  }

  deleteUser(userId: string): Observable<any> {
    return of({});
  }

  deleteCaff(caffId: string): Observable<any> {
    return of({});
  }
}
