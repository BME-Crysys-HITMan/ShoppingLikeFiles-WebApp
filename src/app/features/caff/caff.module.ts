import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaffRoutingModule } from './caff-routing.module';
import { CaffListComponent } from './caff-list/caff-list.component';


@NgModule({
  declarations: [
    CaffListComponent
  ],
  imports: [
    CommonModule,
    CaffRoutingModule
  ]
})
export class CaffModule { }
