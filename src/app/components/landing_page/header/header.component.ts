import { Component, ViewChild, AfterViewInit, ElementRef, Input } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";
import { MenuService } from "src/app/service/menu.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class Header implements AfterViewInit {
  @Input() isLanding!: boolean; // Declare isLanding as an Input property
  @ViewChild('menu') menu?: ElementRef<HTMLImageElement>;
  @ViewChild('open') open?: ElementRef<HTMLImageElement>;
  @ViewChild('close') close?: ElementRef<HTMLImageElement>;
  @ViewChild('nav') nav?: ElementRef<HTMLElement>;
  isLoggedIn: boolean = false;
  userEmail: string | null = null;
  navigations = ['Who we are', 'What is ECP', 'Success Stories'];

  constructor(private menuService: MenuService,
    private authService: AuthService,
    private elRef: ElementRef) { }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe((isAuth) => {
      this.isLoggedIn = isAuth;
      this.userEmail = isAuth ? this.authService.getUserEmail() : null;
    });
  }

  logout() {
    this.authService.logout();
  }

  protected showMenu() {
    if (this.nav && this.menu && this.close) {
      this.nav.nativeElement.style.opacity = '1';
      this.nav.nativeElement.style.transform = 'translate(-50%, 4.5rem)';
      this.nav.nativeElement.classList.add('active');
      this.menu.nativeElement.classList.add('clicked');
      this.menu.nativeElement.style.display = 'none';
      this.close.nativeElement.style.display = 'block';
      this.menuService.showMenu();
    }
  }

  protected closeMenu() {
    if (this.nav && this.menu && this.close) {
      this.nav.nativeElement.style.opacity = '';
      this.nav.nativeElement.style.transform = '';
      this.nav.nativeElement.classList.remove('active');
      if (this.menu.nativeElement.classList.contains('clicked')) {
        this.menu.nativeElement.style.display = 'block';
      }
      this.close.nativeElement.style.display = 'none';
      this.menuService.closeMenu();
    }
  }
  onClickOutside(event: Event) {
    if (this.nav?.nativeElement.classList.contains('active') &&
      !this.elRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
  ngAfterViewInit() {
    if (this.close) {
      this.close.nativeElement.style.display = 'none';
    }
    document.addEventListener('click', this.onClickOutside.bind(this));
  }
  onNavItemClick() {
    this.closeMenu();
  }
}
