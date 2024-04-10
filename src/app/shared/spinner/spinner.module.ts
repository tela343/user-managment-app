import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './spinner.component';
import { MaterialModule } from '../../modules/material.module';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SpinnerComponent],
})

export class SpinnerModule {}
