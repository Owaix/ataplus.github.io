import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
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
  email: string = '';
  phoneno: string = '';
  isNew: boolean = false;

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
    })
  }

  submit() {
    if (this.otp != '') {
      this.service.verify({
        phoneno: this.phoneno,
        otp: this.otp
      }).subscribe((data) => {
        this.router.navigate(['/verify']);
      },
        (error) => {
          alert('Invalid OTP. Please try again.');
        })
    }
  }

}
