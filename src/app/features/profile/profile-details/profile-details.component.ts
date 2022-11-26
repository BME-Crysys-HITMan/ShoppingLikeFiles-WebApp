import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ChangePasswordDto, UpdateUserDto } from 'src/app/types';
import { ProfileService } from '../profile.service';

@Component({
    selector: 'app-profile-details',
    templateUrl: './profile-details.component.html',
    styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

    editUserForm = this.fb.group({
        username: [''],
        firstname: [''],
        lastname: [''],
    });

    changePasswordForm = this.fb.group({
        oldPassword: [''],
        newPassword: [''],
    });

    currentUser;

    constructor(
        private fb: UntypedFormBuilder,
        private spinner: NgxSpinnerService,
        private profileService: ProfileService,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        this.currentUser = this.authService.getUser();
        console.log(this.currentUser);
        this.editUserForm.setValue(
            {
                username: this.currentUser.username,
                firstname: this.currentUser.firstname,
                lastname: this.currentUser.lastname,
            },
        );
    }

    onSubmit() {
        if (!this.editUserForm.valid) {
            return;
        }
        this.spinner.show();
        const updateUserDto: UpdateUserDto = {
            username: this.editUserForm.value.username,
            firstname: this.editUserForm.value.firstname,
            lastname: this.editUserForm.value.lastname,
        };
        this.profileService.updateUser(updateUserDto)
            .subscribe({
                next: () => {
                    this.spinner.hide();
                },
                error: (e) => {
                    this.spinner.hide();
                    // TODO: error handling
                },
            });
    }

    changePassword() {
        if (!this.editUserForm.valid) {
            return;
        }
        this.spinner.show();
        const changePasswordDto: ChangePasswordDto = {
            oldpassword: this.changePasswordForm.value.oldPassword,
            newpassword: this.changePasswordForm.value.newPassword,
        };
        this.profileService.changePassword(changePasswordDto)
            .subscribe({
                next: () => {
                    this.spinner.hide();
                },
                error: (e) => {
                    this.spinner.hide();
                    // TODO: error handling
                },
            });
    }
}
