import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserListComponent } from './user-list/user-list.component';
import { AdminCaffListComponent } from './admin-caff-list/admin-caff-list.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [

    AdminLayoutComponent,
    UserListComponent,
    AdminCaffListComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    NgxSpinnerModule,
  ]
})
export class AdminModule { }
