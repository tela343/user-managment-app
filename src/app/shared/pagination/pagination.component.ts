import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  pageOptions: number[] = [20, 40, 60, 80, 100];

  @Input() elements: any[] = [];
  @Input() spinner = false;
  @Input() currentPage = 0;
  @Input() pages = 0;
  @Input() resultsPerPage = 0;
  @Input() total = 0;

  @Output() previousPageEvent = new EventEmitter<number>();
  @Output() nextPageEvent = new EventEmitter<number>();
  @Output() firstPageEvent = new EventEmitter<number>();
  @Output() lastPageEvent = new EventEmitter<number>();
  @Output() resultsPerPageEvent = new EventEmitter<number>();

  firstPage() {
    this.currentPage = 1;
    this.emitPageEvent(this.firstPageEvent);
  }

  nextPage() {
    if (this.currentPage < this.pages) {
      this.currentPage++;
      this.emitPageEvent(this.nextPageEvent);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.emitPageEvent(this.previousPageEvent);
    }
  }

  lastPage() {
    this.currentPage = this.pages;
    this.emitPageEvent(this.lastPageEvent);
  }

  setResultsPerPage(event: any) {
    const selectedResultsPerPage = parseInt(event.target.innerHTML, 10);
    if (!isNaN(selectedResultsPerPage)) {
      this.resultsPerPage = selectedResultsPerPage;
      this.resultsPerPageEvent.emit(this.resultsPerPage);
    }
  }

  private emitPageEvent(eventEmitter: EventEmitter<number>) {
    eventEmitter.emit(this.currentPage);
  }
}
