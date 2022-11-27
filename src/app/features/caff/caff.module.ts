import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaffRoutingModule } from './caff-routing.module';
import { CaffListComponent } from './caff-list/caff-list.component';
import { CaffDetailsComponent } from './caff-details/caff-details.component';


@NgModule({
  declarations: [
    CaffListComponent,
    CaffDetailsComponent,
  ],
  imports: [
    CommonModule,
    CaffRoutingModule
  ]
})
export class CaffModule { }
