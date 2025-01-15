import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { catchError, Subscription, throwError } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';
import { EncryptionService } from 'src/app/service/encrypt.service';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})

export class EmailVerificationComponent implements OnInit {
  otp: string = '';
  phone: string = '';
  email: string = '';
  phoneno: string = '';
  isReset: boolean = false;
  nowReset: boolean = false;
  errormsg = '';
  showPassword = false;
  errortitle = 'ALERT';
  phoneNumberError = false;
  encPhone: string = '';

  private mySubscription: Subscription | null = null;  // Initialized as null

  constructor(
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private encrypt: EncryptionService,
    private loaderService: LoaderService
  ) {
    this.loaderService.hide();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.encPhone = params['phoneno'];
      this.phoneno = this.encrypt.decrypt(params['phoneno']);
      this.isReset = params['type'] == "true";
    })
  }

  submit() {
    if (!this.phoneNumberError) {
      this.loaderService.show();

      this.mySubscription = this.service.sendotp({ phoneno: this.phoneno }).pipe(
        catchError(err => {
          this.loaderService.hide();
          this.errormsg = err.error?.message || 'An error occurred';
          return throwError(() => new Error(err));
        })
      ).subscribe({
        next: response => {
          this.loaderService.hide();
          this.nowReset = true;
        },
        error: error => {
          this.loaderService.hide();
          this.openModal();
          this.errormsg = 'Phone # verification failed';
        },
        complete: () => {
          console.log('OTP submission process completed.');
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  isModalOpen = false;
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  verify() {
    if (this.otp != '') {
      this.service.verify({
        phoneno: this.phoneno,
        otp: this.otp
      }).subscribe((data) => {
        console.log(data);
        this.router.navigate(['/verify', this.isReset, this.encrypt.encrypt(data.id.toString())]);
      },
        (error) => {
          this.openModal();
          this.errormsg = error.error.message;
        })
    }
  }

  validatePhoneNumber(event: KeyboardEvent): void {

  }

  checkPhoneNumberFormat(): void {
    const phoneRegex = /^\+[0-9]{10,15}$/;
    this.phoneNumberError = !phoneRegex.test(this.phoneno);
  }
}
