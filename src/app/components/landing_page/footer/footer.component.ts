import { Component, OnDestroy, AfterViewInit, HostListener } from "@angular/core";

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class Footer implements AfterViewInit, OnDestroy {
  nav = ['FAQ', 'Terms And Condition', 'Privacy Policy', 'Contact Us', 'Blog'];
  sections = {
    aboutUs: false,
    getStarted: false,
    legal: false
  };
  nav2 = [];
  isMobile = false;

  ngAfterViewInit(): void {
  }

  @HostListener('window:resize', [])
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 767;
    if (!this.isMobile) {
      this.sections = {
        aboutUs: false,
        getStarted: false,
        legal: false
      };
    }
  }

  toggleSection(section: keyof typeof this.sections) {
    this.sections[section] = !this.sections[section];
  }

  ngOnDestroy(): void {
    const svgs = document.getElementsByClassName('icons-social')[0].getElementsByTagName('svg');

    for (let i = 0; i < svgs.length; i++) {
      svgs[i].removeEventListener('mouseover', () => { });

      svgs[i].removeEventListener('mouseout', () => { });
    }
  }
}
