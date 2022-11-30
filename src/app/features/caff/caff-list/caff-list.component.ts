import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CaffResponse } from 'src/app/sdk';
import { CaffUploadDialogComponent } from '../caff-upload-dialog/caff-upload-dialog.component';
import { CaffService } from '../caff.service';

@Component({
    selector: 'app-caff-list',
    templateUrl: './caff-list.component.html',
    styleUrls: ['./caff-list.component.scss']
})
export class CaffListComponent implements OnInit {

    caffs: CaffResponse[] = [];

    constructor(
        private caffService: CaffService,
        private spinner: NgxSpinnerService,
        private router: Router,
        private dialog: MatDialog,
    ) { }

    ngOnInit(): void {
        this.spinner.show();
        this.reload();
    }

    private reload(): void {
        this.spinner.show();
        this.caffService.getCaffs().subscribe({
            next: (caffs: CaffResponse[]) => {
                this.spinner.hide();
                this.caffs = caffs;
            },
            complete: () => {
                this.spinner.hide();
            },
            error: (err) => {
                // remove console log
                console.log(err);
                this.spinner.hide();
            },
        });
    }

    filter() {

    }

    addCaff() {
        this.dialog.open(CaffUploadDialogComponent, {
            width: '500px',
            panelClass: 'no-padding-dialog-container',
            autoFocus: true,
        }).afterClosed().subscribe({
            next: () => {

            },
        });
    }

    goToDetails(caff: CaffResponse): void {
        this.router.navigate(['/caff', caff.id]);
    }
}
