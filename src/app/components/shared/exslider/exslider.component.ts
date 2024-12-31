import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './exslider.component.html',
  styleUrls: ['./exslider.component.scss'],
})
export class ExsliderComponent {
  @Input() slides: { template: TemplateRef<any>; context?: any }[] = [];

  currentIndex = 0;

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
