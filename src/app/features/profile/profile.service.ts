import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChangePasswordDto, UpdateUserDto } from 'src/app/types';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  updateUser(updateUserDto: UpdateUserDto): Observable<any> {
    return of({});
  }

  changePassword(changePasswordDto: ChangePasswordDto): Observable<any> {
    return of({});

  }


}
