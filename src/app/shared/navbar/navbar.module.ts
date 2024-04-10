import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { MaterialModule } from '../../modules/material.module';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLinkWithHref
  ],
  exports: [NavbarComponent],
})
export class NavbarModule { }
