import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';

import { EditUserComponent } from './edit-user.component';
import { ApiService } from '../../../services/api.service';
import { UserForm } from '../types';

describe('EditUserComponent', () => {
  let component: EditUserComponent;
  let fixture: ComponentFixture<EditUserComponent>;
  let mockApiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    mockApiService = jasmine.createSpyObj('ApiService', ['put']);

    await TestBed.configureTestingModule({
      declarations: [EditUserComponent],
      imports: [
        ReactiveFormsModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatSelectModule,
      ],
      providers: [{ provide: ApiService, useValue: mockApiService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize editForm', () => {
    expect(component.editForm).toBeDefined();
  });

  it('should populate form with user data on initialization', () => {
    const mockUser: UserForm = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'Male',
      status: 'Active',
    };

    component.user = mockUser;
    component.ngOnInit();

    expect(component.editForm.value).toEqual(mockUser);
  });

  it('should emit userEdited event with correct data when editUser is called', () => {
    const mockUser: UserForm = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      gender: 'Male',
      status: 'Active',
    };

    spyOn(component.snackBar, 'open');
    mockApiService.put.and.returnValue(of(mockUser));

    component.editUser();

    expect(component.snackBar.open).toHaveBeenCalledWith(
      'User edited successfully',
      'Close',
    );
  });

  it('should display snackbar message on successful edit', () => {
    mockApiService.put.and.returnValue(of(null));
    spyOn(component.snackBar, 'open');

    component.editUser();

    expect(component.snackBar.open).toHaveBeenCalledWith(
      'User edited successfully',
      'Close',
    );
  });

  it('should display snackbar message on edit error', () => {
    const errorMessage = 'An error occurred';
    mockApiService.put.and.returnValue(
      throwError({ error: [{ message: errorMessage }] }),
    );
    spyOn(component.snackBar, 'open');

    component.editUser();

    expect(component.snackBar.open).toHaveBeenCalledWith(errorMessage, 'Close');
  });

  it('should emit cancelEdit event when cancel is called', () => {
    spyOn(component.cancelEdit, 'emit');

    component.cancel();

    expect(component.cancelEdit.emit).toHaveBeenCalled();
  });
});
