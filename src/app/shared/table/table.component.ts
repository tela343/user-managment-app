import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];

  @Output() editItem = new EventEmitter<number>();
  @Output() deleteItem = new EventEmitter<number>();

   capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
