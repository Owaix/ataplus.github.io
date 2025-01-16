import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Subscription, throwError } from 'rxjs';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/service/api.service';
import { EncryptionService } from 'src/app/service/encrypt.service';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  user: { name: string; email: string; joinDate: Date } | null = null;
  users: User = new User;
  private mySubscription: Subscription | null = null;
  errormsg = '';
  showPassword = false;
  showCnfrmPassword = false;
  errortitle = 'ALERT';
  phoneNumberError = false;
  acceptPrivacyPolicy = false;
  acceptTerms = false;

  constructor(
    private service: ApiService,
    private encrypt: EncryptionService,
    private router: Router,
    private loaderService: LoaderService
  ) { }
  ngOnInit(): void {
    this.user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      joinDate: new Date('2023-01-01'),
    };
  }

  reset() {
    let id = localStorage.getItem('id') || "";
    this.router.navigate(['/verify', true, this.encrypt.encrypt(id)]);
  }

  onSubmit() {
    if (this.users.email && this.users.password && !this.phoneNumberError) {
      this.loaderService.show();
      this.mySubscription = this.service.register(this.users).pipe(
        catchError(err => {
          this.loaderService.hide();
          if (err.status === 400) {
            this.errormsg = err.error.message;
            this.openModal();
          } else {
            this.errormsg = err.error.message;
            this.openModal();
          }
          return throwError(() => new Error(err));
        })
      ).subscribe(
        response => {
          this.errormsg = 'success';
          this.service.sendotp({
            phoneno: response.user.phoneno
          }).subscribe(data => {
            let phoneno = this.encrypt.encrypt(response.user.phoneno);
            this.router.navigate(['/everif', phoneno, 'false']);
          })
          //localStorage.setItem('token', response.data.access_token);
          // this.authService.login(this.users.email);
        },
        error => {
          console.log('Error:', error);
        }
      );
    }
  }

  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  validatePhoneNumber(event: KeyboardEvent): void {

  }

  get passwordMismatch() {
    return this.users.password !== this.users.confirm_password;
  }

  checkPhoneNumberFormat(): void {
    const phoneRegex = /^\+[0-9]{10,15}$/;
    this.phoneNumberError = !phoneRegex.test(this.users.phoneno);
  }
}
