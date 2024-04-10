import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [TableComponent],
})
export class TableModule {}
