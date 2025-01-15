import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/service/api.service';
import { EncryptionService } from 'src/app/service/encrypt.service';

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
  loginLink = 'login';
  linkColor = 'white';

  errorIconClass = 'fas fa-exclamation-circle';
  tokenExpiredMessage = 'Your access token has  expired!';
  tokenExpiredInstructions = 'Your verification token has expired. Please click below to send a new OTP.';
  resendEmailText = 'RESEND OTP';

  token: string | null = null;
  isExpire = false;
  id = '0';
  private mySubscription: Subscription | null = null;

  constructor(
    private encrypt: EncryptionService,
    private route: ActivatedRoute,
    private service: ApiService,
    private router: Router) { }
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
      this.id = this.encrypt.decrypt(params['id']);
      this.isReset = params['type'] == "true";
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
    if (this.users.password) {
      this.service.reset({ id: this.id, password: this.users.password }).subscribe(x => {
        this.isReset = false;
        this.emailVerifiedMessage = 'Account password reset successfully';
        this.thankYouMessage = 'Thank you for verifying your Phone #!';
      })
    }
  }

  get passwordMismatch() {
    return this.users.password !== this.users.confirm_password;
  }
}