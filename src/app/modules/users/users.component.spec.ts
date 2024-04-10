import {
  TestBed,
  ComponentFixture,
  async,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSelectModule } from '@angular/material/select';

import { UsersComponent } from './users.component';
import { ApiService } from '../../services/api.service';
import { UserForm } from './types';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { SearchModule } from '../../shared/search/search.module';
import { AddUserModule } from './add-user/add-user.module';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { SpinnerModule } from '../../shared/spinner/spinner.module';

const mockResponse = {
  body: [],
  headers: {
    get: () => '10',
  },
};

class MockActivatedRoute {}

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let apiService: ApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [
        MatSnackBarModule,
        MatDialogModule,
        HttpClientTestingModule,
        MatSelectModule,
        NavbarModule,
        SearchModule,
        AddUserModule,
        PaginationModule,
        SpinnerModule,
        NoopAnimationsModule,
      ],
      providers: [
        ApiService,
        { provide: ActivatedRoute, useClass: MockActivatedRoute }, // Provide a mock ActivatedRoute
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    spyOn(component._snackBar, 'open');
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(true),
    } as any);
    spyOn(apiService, 'get').and.returnValue(of(mockResponse as any));

    spyOn(apiService, 'post').and.returnValue(of({}));
    spyOn(apiService, 'delete').and.returnValue(of({}));
    spyOn(component, 'getUsers');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get users on initialization', () => {
    expect(component.getUsers).toHaveBeenCalled();
  });

  it('should add a user', () => {
    const userForm: UserForm = {
      name: 'Test',
      email: 'test@test.com',
      gender: 'Male',
      status: 'Active',
    };
    component.addUser(userForm);
    expect(apiService.post).toHaveBeenCalledWith('users', userForm);
    expect(component.getUsers).toHaveBeenCalled();
    expect(component._snackBar.open).toHaveBeenCalledWith(
      'User added successfully',
      'Close',
    );
  });

  it('should reset form after adding user', () => {
    spyOn(component, 'resetForm');
    component.addUser({
      name: 'Test',
      email: 'test@test.com',
      gender: 'Male',
      status: 'Active',
    });
    expect(component.resetForm).toHaveBeenCalled();
  });

  it('should delete a user', fakeAsync(() => {
    spyOn(window, 'confirm').and.returnValue(true);
    component.deleteUser(1);
    tick();
    expect(apiService.delete).toHaveBeenCalledWith('users/1');
    expect(component._snackBar.open).toHaveBeenCalledWith(
      'User deleted successfully',
      'Close',
    );
    expect(component.getUsers).toHaveBeenCalled();
  }));
});
