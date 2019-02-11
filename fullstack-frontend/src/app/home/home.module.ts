import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatIconModule, MatRippleModule, MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [HomeLayoutComponent],
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatRippleModule, MatTableModule, MatSortModule,
    FlexLayoutModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
