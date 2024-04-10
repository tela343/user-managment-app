import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { EditUserComponent } from './edit-user.component';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [EditUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    MatDialogModule,
    MatInputModule,
  ],
  exports: [EditUserComponent],
})
export class UserEditModule {}
