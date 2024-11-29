import { Component, OnDestroy, AfterViewInit } from "@angular/core";

@Component({
  selector: 'subfooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class SubFooter implements AfterViewInit, OnDestroy {
  nav = ['FAQ', 'Terms And Condition', 'Privacy Policy', 'Contact Us', 'Blog'];
  nav2 = [];

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    const svgs = document.getElementsByClassName('icons-social')[0].getElementsByTagName('svg');
    for (let i = 0; i < svgs.length; i++) {
      svgs[i].removeEventListener('mouseover', () => { });
      svgs[i].removeEventListener('mouseout', () => { });
    }
  }
}
