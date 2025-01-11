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
      this.phoneno = this.encrypt.decrypt(params['phoneno']);
      console.log(params['type']);
      this.isReset = params['type'] == "true";
      this.router.navigate(['/verify', this.isReset]);
    })
  }

  emailtoreset() {
    if (!this.phoneNumberError) {
      this.mySubscription = this.service.sendotp({ phoneno: this.phoneno }).pipe(
        catchError(err => {
          this.loaderService.hide();
          if (err.status === 400) {
            this.errormsg = err.error.message;
          } else {
            this.errormsg = err.error.message;
          }
          return throwError(() => new Error(err));
        })
      ).subscribe(
        response => {
          this.nowReset = true
        },
        error => {
          console.log('Error:', error);
        }
      );
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

  submit() {
    if (this.otp != '') {
      this.service.verify({
        phoneno: this.phoneno,
        otp: this.otp
      }).subscribe((data) => {
        this.router.navigate(['/verify', this.isReset]);
      },
        (error) => {
          alert('Invalid OTP. Please try again.');
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
