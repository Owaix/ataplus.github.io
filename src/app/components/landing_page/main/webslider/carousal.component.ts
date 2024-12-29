import { Component, Input } from '@angular/core';
import { SlideInterface } from '../mobileslider/slidercomponent.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class WebSliderComponent {
  @Input() items: SlideInterface[] = [];

  translateX = 0;
  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.translateX = -(this.currentIndex * 100 / 3);
    }
  }

  next() {
    if (this.currentIndex < this.items.length - 3) {
      this.currentIndex++;
      this.translateX = -(this.currentIndex * 100 / 3);
    }
  }

  isDragging = false;
  startX = 0;

  onDragStart(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
  }

  onDragMove(event: MouseEvent) {
    if (!this.isDragging) return;
    const diff = event.clientX - this.startX;
    this.translateX += (diff / window.innerWidth) * 100;
    this.startX = event.clientX;
  }

  onDragEnd() {
    this.isDragging = false;
    const index = Math.round(Math.abs(this.translateX) / (100 / 3));
    this.currentIndex = Math.max(0, Math.min(index, this.items.length - 3));
    this.translateX = -(this.currentIndex * 100 / 3);
  }
}
