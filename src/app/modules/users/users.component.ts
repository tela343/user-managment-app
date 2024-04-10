import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { finalize } from 'rxjs/operators';

import { UserForm } from './types';
import { SearchComponent } from '../../shared/search/search.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})

export class UsersComponent implements OnInit {
  @ViewChild('searchComponentRef') searchComponentRef!: SearchComponent;
  @ViewChild('addUserDialog') addUserDialogTemplate!: TemplateRef<any>;

  spinner: boolean = false;
  disabled: boolean = false;
  users: UserForm[] = [];
  userToEdit: UserForm = {} as UserForm;
  currentPage: number = 1;
  resultsPerPage: number = 20;
  total: number = 0;
  pages: number = 0;
  searchName: string = '';
  searchEmail: string = '';
  tableColumns = ['name', 'email', 'gender', 'status'];

  constructor(
    public apiService: ApiService,
    public _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.apiService
      .get(
        `users?name=${this.searchName}&email=${this.searchEmail}&page=${this.currentPage}&per_page=${this.resultsPerPage}`,
      )
      .pipe(finalize(() => (this.spinner = false)))
      .subscribe({
        next: (response: HttpResponse<any>) => {
          const headers = response.headers;

          this.total = +headers.get('X-Pagination-Total')!;
          this.pages = Math.ceil(this.total / this.resultsPerPage);

          this.users = response.body;
        },
        error: (error) => {
          this._snackBar.open('Error getting users', 'Close');
        },
      });
  }

  addUser(event: UserForm): void {
    this.apiService.post('users', event).subscribe({
      next: () => {
        this.handleUserAdded();
      },
      error: (error) => {
        this.handleUserError(error);
      },
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.disabled = true;
      this.apiService.delete(`users/${userId}`).subscribe({
        next: (data: any) => {
          this._snackBar.open('User deleted successfully', 'Close');
          this.currentPage = 1;
          this.getUsers();
          this.disabled = false;
        },
        error: (error) => {
          this._snackBar.open('Error deleting user', 'Close');
          this.disabled = false;
        },
      });
    }
  }

  private handleUserAdded(): void {
    this._snackBar.open('User added successfully', 'Close');
    this.resetForm();
    this.currentPage = 1;
    this.getUsers();
  }

  private handleUserError(error: any): void {
    if (error.error[0].message === 'has already been taken') {
      this._snackBar.open(`User Email ${error.error[0].message}`, 'Close');
    } else {
      this._snackBar.open('Error adding user', 'Close');
    }
  }

  resetForm(): void {
    this.searchName = '';
    this.searchEmail = '';
    if (this.searchComponentRef) {
      this.searchComponentRef.onClear();
    }
  }

  protected searchUserName(search: string): void {
    this.searchName = search;
    this.currentPage = 1;
    this.getUsers();
  }

  protected searchUserEmail(search: string): void {
    this.searchEmail = search;
    this.currentPage = 1;
    this.getUsers();
  }


  previousPage(currentPage: number): void {
    this.currentPage = currentPage;
    this.getUsers();
  }

  nextPage(currentPage: number): void {
    this.currentPage = currentPage;
    this.getUsers();
  }

  firstPage(currentPage: number): void {
    this.currentPage = currentPage;
    this.getUsers();
  }

  lastPage(currentPage: number): void {
    this.currentPage = currentPage;
    this.getUsers();
  }

  setResultsPerPage(resultsPerPage: any): void {
    this.currentPage = 1;
    this.resultsPerPage = resultsPerPage;
    this.getUsers();
  }

  openDialog(id: number): void {
    this.spinner = true;
    this.apiService
      .get(`users/${id}`)
      .pipe(finalize(() => (this.spinner = false)))
      .subscribe({
        next: (data: any) => {
          console.log("data is ", data)
          this.userToEdit = data.body;
          this.dialog.open(this.addUserDialogTemplate);
        },
        error: (error) => {
          this._snackBar.open('Error fetching user', 'Close');
          this.disabled = false;
        },
      });
  }

  closeDialog(): void {
    this.userToEdit = {} as UserForm;
    this.dialog.closeAll();
  }

  handleUserEdited(): void {
    this.getUsers();
    this._snackBar.open('User edited successfully', 'Close');
    this.closeDialog();
  }

}
