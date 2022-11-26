import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GetUserDto } from 'src/app/types';
import { AuthService } from '../../auth/auth.service';
import { LoginDialogComponent } from '../../auth/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../../auth/register-dialog/register-dialog.component';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    // TODO: add menu to right side of navbar that handles auth
    currentUser: GetUserDto;

    constructor(
        private authService: AuthService,
        private dialog: MatDialog,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.getUser();
    }

    login(): void {
        this.dialog.open(LoginDialogComponent, {
            width: '500px',
            panelClass: 'no-padding-dialog-container',
            disableClose: true,
            autoFocus: true,
        }).afterClosed().subscribe({
            next: () => {

            },
        });
    }

    register(): void {
        this.dialog.open(RegisterDialogComponent, {
            width: '500px',
            panelClass: 'no-padding-dialog-container',
            disableClose: true,
            autoFocus: true,
        }).afterClosed().subscribe();
    }

    logout(): void {
        console.log('logout');
    }

    navigateToProfile() {
        this.router.navigate(["/profile"]);
    }
}
