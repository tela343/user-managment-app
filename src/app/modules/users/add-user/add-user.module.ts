import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { AddUserComponent } from './add-user.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [AddUserComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, MatDialogModule],
  exports: [AddUserComponent],
})
export class AddUserModule {}
