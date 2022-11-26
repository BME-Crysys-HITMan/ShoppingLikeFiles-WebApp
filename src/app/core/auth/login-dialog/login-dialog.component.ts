import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginDto } from 'src/app/types';
import { LayoutComponent } from '../../layout/layout/layout.component';
import { LoginService } from '../login.service';

@Component({
    selector: 'app-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

    //TODO: cancel button helyett jobb felso sarok x
    loginForm = this.fb.group({
        username: [''],
        password: [''],
    });

    error = '';

    constructor(
        private fb: UntypedFormBuilder,
        private spinner: NgxSpinnerService,
        public dialogRef: MatDialogRef<LayoutComponent>,
        private loginService: LoginService,
    ) { }

    ngOnInit(): void {
        
    }

    cancel () {
        this.dialogRef.close();
    }

    onSubmit() {
        if (!this.loginForm.valid) {
            return;
        }
        this.spinner.show();
        const loginDto: LoginDto = {
            username: this.loginForm.value.username,
            password: this.loginForm.value.password,
        };
        this.loginService.login(loginDto)
            .subscribe({
                next: () => {
                    console.log('asdas');
                    this.spinner.hide();
                    this.dialogRef.close();
                },
                error: (e) => {
                    this.spinner.hide();
                    // TODO: error handling
                },
            });
    }

}
