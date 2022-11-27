import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AdminService } from '../admin.service';

@Component({
    selector: 'app-admin-caff-list',
    templateUrl: './admin-caff-list.component.html',
    styleUrls: ['./admin-caff-list.component.scss']
})
export class AdminCaffListComponent implements OnInit {

    dataSource = new MatTableDataSource<any>();
    displayedColumns = [
        'username',
        'operations',
    ];
    caffs = [];

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    adminUser;

    constructor(
        private adminService: AdminService,
        private spinner: NgxSpinnerService,
        private authService: AuthService,
    ) { }

    ngOnInit(): void {
        this.adminUser = this.authService.getUser();
        this.paginator.pageSize = 25;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
        this.reload();
    }

    private reload(): void {
        this.spinner.show();
        this.adminService.getCaffs().subscribe({
            next: (caffs) => {
                this.caffs = caffs,
                    this.dataSource.data = this.caffs;
            },
            complete: () => {
                this.spinner.hide();
            },
            error: (err) => {
                console.log(err);
                this.spinner.hide();
            },
        });
    }

    deleteCaff(caff): void {
        this.adminService.deleteCaff(caff.id)
            .subscribe({
                next: () => this.reload(),
            });
    }

}
