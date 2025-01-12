import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
  selectedTab: string = 'terms';

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
}
