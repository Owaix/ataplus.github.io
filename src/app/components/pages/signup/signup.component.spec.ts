import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SignupComponent } from './signup.component';
import { ApiService } from 'src/app/service/api.service';
import { of } from 'rxjs';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let apiService: ApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [ApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with required fields', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[name="username"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="first_name"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="last_name"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="email"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="password"]')).toBeTruthy();
    expect(compiled.querySelector('input[name="confirm_password"]')).toBeTruthy();
  });

  it('should call register method on form submit', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should call apiService.register when onSubmit is called', () => {
    spyOn(apiService, 'register').and.returnValue(of({}));
    component.users = {
      username: 'testuser',
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      password: 'password123',
      confirm_password: 'password123',
      phoneno: '',
      nric_passport: '',
      nationality: '',
      gender: '',
      dob: '',
      address_line1: '',
      address_line2: '',
      city: '',
      postcode: '',
      state: '',
      country: '',
      investor_type: '',
      token: ''
    };
    component.onSubmit();
    expect(apiService.register).toHaveBeenCalledWith(component.users);
  });

  it('should display error message if passwords do not match', () => {
    component.users.password = 'password123';
    component.users.confirm_password = 'password456';
    component.onSubmit();
    expect(component.passwordMismatch).toBeTrue();
  });

  it('should reset passwordMismatch when passwords match', () => {
    component.users.password = 'password123';
    component.users.confirm_password = 'password123';
    component.onSubmit();
    expect(component.passwordMismatch).toBeFalse();
  });
});
