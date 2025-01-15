import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EncryptionService } from 'src/app/service/encrypt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: { name: string; email: string; joinDate: Date } | null = null;
  constructor(private router: Router,
    private encrypt: EncryptionService
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
}
