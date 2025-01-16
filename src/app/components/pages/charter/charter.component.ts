import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Tabs } from '../terms/terms.component';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-terms',
  templateUrl: './charter.component.html',
  styleUrls: ['./charter.component.scss']
})

export class CharterComponent {
  selectedTab: string = 'terms';
  isntSwip: boolean = true;
  constructor(
    private renderer: Renderer2,
    private menuService: MenuService,
    private elRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const elements = this.elRef.nativeElement.querySelectorAll('.mat-ripple.mat-mdc-tab-header-pagination');
    elements.forEach((element: HTMLElement) => {
      this.renderer.setStyle(element, 'display', 'none');
    });
  }

  ngOnInit() {
    const container: HTMLElement = this.elRef.nativeElement.querySelector(
      '.terms-container'
    );

    this.menuService.menuState$.subscribe((isMenuOpen) => {
      if (isMenuOpen) {
        container.classList.add('menuPosition');
      } else {
        container.classList.remove('menuPosition');
      }
    });
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  selectedIndex: number = 1;
  tabs: Tabs[] = [
    {
      "id": 1,
      "title": "Introduction",
      "value": "introduction"
    },
    {
      "id": 2,
      "title": "Verification of Information",
      "value": "verification_of_information"
    },
    {
      "id": 3,
      "title": "Financial Information",
      "value": "financial_information"
    },
    {
      "id": 4,
      "title": "Due Diligence Charter",
      "value": "due_diligence_charter"
    },
    {
      "id": 5,
      "title": "Risks",
      "value": "risks"
    },
    {
      "id": 6,
      "title": "Legal",
      "value": "legal"
    },
    {
      "id": 7,
      "title": "The Company & Key Personnel",
      "value": "company_key_personnel"
    }
  ]

  private tabsCount = this.tabs.length;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  selectChange(): void {
    console.log("Selected INDEX: " + this.selectedIndex);
    // if (!this.isntSwip) {
    let tabe = this.tabs[this.selectedIndex].value;
    document.getElementById(tabe)!.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    //}
    this.isntSwip = false;
  }

  swipe(selectedIndex: number, action = this.SWIPE_ACTION.RIGHT, tab: string) {
    console.log("swipe");
    console.log("number", selectedIndex);
    console.log("action", action);
    this.isntSwip = true;
    if (this.selectedIndex < 0/* starter point as 1 */ || this.selectedIndex > this.tabsCount/* here it is */) return;

    if (action === this.SWIPE_ACTION.LEFT) {
      const isLast = this.selectedIndex === this.tabsCount;
      this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
      console.log("Swipe right - INDEX: " + this.selectedIndex);
    }

    if (action === this.SWIPE_ACTION.RIGHT) {
      const isFirst = this.selectedIndex === 0;
      this.selectedIndex = isFirst ? 1 : this.selectedIndex - 1;
      console.log("Swipe left - INDEX: " + this.selectedIndex);
    }
  }

}
