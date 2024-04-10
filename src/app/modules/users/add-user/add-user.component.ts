import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserForm } from '../types';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent {
  @Output() addUserEvent = new EventEmitter<UserForm>();

  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  addUser(): void {
    if (this.userForm.valid) {
      this.addUserEvent.emit(this.userForm.value);
    }
  }
}
