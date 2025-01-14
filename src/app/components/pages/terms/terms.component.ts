import { Component } from '@angular/core';
import * as exp from 'constants';

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

  selectedIndex: number = 1;
  tabs: Tabs[] = [
    {
      id: 1,
      title: "Terms of Use",
      value: "terms"
    },
    {
      id: 2,
      title: "Risk Warning",
      value: "risk"
    },
    {
      id: 3,
      title: "Guidelines & Eligibility",
      value: "guidelines"
    },
    {
      id: 4,
      title: "Privacy Policy",
      value: "privacy"
    }
  ];

  private tabsCount = this.tabs.length;

  selectChange(): void {
    console.log("Selected INDEX: " + this.selectedIndex);
  }

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  // Action triggered when user swipes
  swipe(selectedIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    console.log("swipe");
    console.log("number", selectedIndex);
    console.log("action", action);
    // Out of range
    if (this.selectedIndex < 0/* starter point as 1 */ || this.selectedIndex > this.tabsCount/* here it is */) return;

    // Swipe left, next tab
    if (action === this.SWIPE_ACTION.LEFT) {
      const isLast = this.selectedIndex === this.tabsCount;
      this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
      console.log("Swipe right - INDEX: " + this.selectedIndex);
    }

    // Swipe right, previous tab
    if (action === this.SWIPE_ACTION.RIGHT) {
      const isFirst = this.selectedIndex === 0 /* starter point as 1 */;
      this.selectedIndex = isFirst ? 1 : this.selectedIndex - 1;
      console.log("Swipe left - INDEX: " + this.selectedIndex);
    }
  }

}

export interface Tabs {
  id: number;
  title: string;
  value: string;
}