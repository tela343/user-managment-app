import { FormBuilder } from '@angular/forms';
import { AddUserComponent } from './add-user.component';

describe('AddUserComponent', () => {
  let component: AddUserComponent;

  beforeEach(() => {
    component = new AddUserComponent(new FormBuilder());
  });

  it('should initialize the form with empty fields', () => {
    expect(component.userForm.value).toEqual({
      name: '',
      email: '',
      gender: '',
      status: '',
    });
  });

  it('should mark form as invalid if fields are empty', () => {
    expect(component.userForm.valid).toBeFalsy();

    const nameField = component.userForm.get('name');
    nameField?.setValue('');
    expect(nameField?.valid).toBeFalsy();

    const emailField = component.userForm.get('email');
    emailField?.setValue('');
    expect(emailField?.valid).toBeFalsy();

    const genderField = component.userForm.get('gender');
    genderField?.setValue('');
    expect(genderField?.valid).toBeFalsy();

    const statusField = component.userForm.get('status');
    statusField?.setValue('');
    expect(statusField?.valid).toBeFalsy();
  });

  it('should mark form as valid if all fields are filled', () => {
    expect(component.userForm.valid).toBeFalsy();

    component.userForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'male',
      status: 'active',
    });
    expect(component.userForm.valid).toBeTruthy();
  });

  it('should emit addUserEvent when form is submitted', () => {
    spyOn(component.addUserEvent, 'emit');

    component.userForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'Male',
      status: 'Active',
    });

    component.addUser();
    expect(component.addUserEvent.emit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'Male',
      status: 'Active',
    });
  });
});
