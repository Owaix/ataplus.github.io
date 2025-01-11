import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Subscription, throwError } from 'rxjs';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})

export class VerifyComponent implements OnInit {
  isReset = false;
  showPassword = false;
  showCnfrmPassword = false;
  users: User = new User;
  checkIconClass = 'fas fa-check-circle';
  emailVerifiedMessage = 'Phone # Verified Successfully';
  thankYouMessage = 'Thank you for verifying your Phone #!';
  accountReadyMessage = 'Your account is now ready to use.';
  nextStepsTitle = 'Next Steps';
  nextSteps = [
    'Log in to your account to explore features.',
    'Check your email for any updates from us.',
    'Contact support if you encounter issues.'
  ];
  loginText = 'LOG IN';
  loginLink = 'login'; // Link path
  linkColor = 'white';

  errorIconClass = 'fas fa-exclamation-circle';
  tokenExpiredMessage = 'Your access token has  expired!';
  tokenExpiredInstructions = 'Your verification token has expired. Please click below to send a new OTP.';
  resendEmailText = 'RESEND OTP';

  token: string | null = null;
  isExpire = false;
  private mySubscription: Subscription | null = null;  // Initialized as null

  constructor(private route: ActivatedRoute, private service: ApiService, private router: Router) { }
  updateForExpiredToken(): void {
    this.checkIconClass = this.errorIconClass;
    this.emailVerifiedMessage = this.tokenExpiredMessage;
    this.thankYouMessage = this.tokenExpiredInstructions;
    this.accountReadyMessage = '';
    this.nextStepsTitle = '';
    this.nextSteps = [];
    this.loginText = this.resendEmailText;
    this.loginLink = 'send-new-email';
  }
  resendEmail(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.isReset = params['type'] == "true";
      console.log(params['type']);
    })
  }
  openModal() {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
  onSubmit() {

  }
  get passwordMismatch() {
    return this.users.password !== this.users.confirm_password;
  }
}