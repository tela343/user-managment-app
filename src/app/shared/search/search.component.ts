import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  @Input() label: string = '';
  @Input() searchValue: string = '';

  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    this.searchEvent.emit(this.searchValue.trim());
  }

  onClear() {
    this.searchValue = '';
    this.searchEvent.emit(this.searchValue);
  }
}
