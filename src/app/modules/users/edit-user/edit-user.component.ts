import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ApiService } from '../../../services/api.service';
import { UserForm } from '../types';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup = new FormGroup({});

  @Input() user: UserForm = {} as UserForm;
  @Input() title = '';

  @Output() userEdited = new EventEmitter<UserForm>();
  @Output() cancelEdit = new EventEmitter<void>();

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public snackBar: MatSnackBar,
  ) {
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      id: [''],
    });
  }

  ngOnInit(): void {
    this.populateForm();
  }

  private populateForm(): void {
    const { name, email, gender, status, id } = this.user;
    this.editForm.patchValue({ name, email, gender, status, id });
  }

  editUser(): void {
    const { id } = this.editForm.value;
    if (confirm('Are you sure you want to edit this user?')) {
      this.apiService.put(`users/${id}`, this.editForm.value).subscribe({
        next: () => {
          this.userEdited.emit(this.editForm.value);
          this.snackBar.open('User edited successfully', 'Close');
        },
        error: (error) => {
          const errorMessage =
            error.error[0]?.message || 'An error occurred while editing user';
          this.snackBar.open(errorMessage, 'Close');
        },
      });
    }
  }

  cancel(): void {
    this.cancelEdit.emit();
  }
}
