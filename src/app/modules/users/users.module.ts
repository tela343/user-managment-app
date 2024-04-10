import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '../material.module';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { SearchModule } from '../../shared/search/search.module';
import { SpinnerModule } from '../../shared/spinner/spinner.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { UserEditModule } from './edit-user/edit-user.module';
import { TableModule } from '../../shared/table/table.module';
import { AddUserModule } from './add-user/add-user.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    NavbarModule,
    PaginationModule,
    SearchModule,
    SpinnerModule,
    MatTableModule,
    MatDialogModule,
    UserEditModule,
    TableModule,
    AddUserModule,
  ],
})

export class UsersModule {}
