import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isLanding = true;
  constructor(private router: Router, private route: ActivatedRoute) { }
  isCustomerRoute(): boolean {
    return this.router.url === ''; // Adjust the route as needed
  }
  ngAfterViewInit(): void {
    const footer = document.getElementsByTagName('footer')[0];

    if (footer) {
      document.addEventListener('scroll', () => {
        this.animation(footer);
      })
    }
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const childRoute = this.getChildRoute(this.route);
        this.isLanding = childRoute.snapshot.data['showHeader'] ?? false;
      });
  }

  private getChildRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  private animation(element: HTMLElement) {
    if (this.isInViewport(element)) {
      element.style.opacity = '1';
    }
  }

  private isInViewport(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      Math.round(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
}
