import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: { name: string; email: string; joinDate: Date } | null = null;

  ngOnInit(): void {
    // Simulated user data (replace with a service call if needed)
    this.user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      joinDate: new Date('2023-01-01'),
    };
  }
}
