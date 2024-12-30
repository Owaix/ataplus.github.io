import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-carousel',
  templateUrl: './slidercomponent.component.html',
  styleUrls: ['./slidercomponent.component.scss']
})
export class MobileSlideComponent implements OnInit {
  @Input() slides: SlideInterface[] = [];
  currentIndex: number = 0;
  nextIndex: number = 1;
  startX: number = 0;
  isTransitioning: boolean = false;

  ngOnInit() {
    // Initialization logic if needed
  }

  getCurrentSlideUrl(index: number) {
    return `url('${this.slides[index].url}')`;
  }

  obj() {
    return this.slides[this.currentIndex];
  }

  goToPrevious(): void {
    this.isTransitioning = true;
    this.nextIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
    setTimeout(() => {
      this.currentIndex = this.nextIndex;
      this.isTransitioning = false;
    }, 500);
  }

  goToNext(): void {
    this.isTransitioning = true;
    this.nextIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
    setTimeout(() => {
      this.currentIndex = this.nextIndex;
      this.isTransitioning = false;
    }, 500);
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
    this.nextIndex = (slideIndex + 1) % this.slides.length;
  }

  startSwipe(event: MouseEvent | TouchEvent) {
    this.startX = (event instanceof MouseEvent) ? event.clientX : event.touches[0].clientX;
  }

  endSwipe(event: MouseEvent | TouchEvent) {
    const endX = (event instanceof MouseEvent) ? event.clientX : event.changedTouches[0].clientX;
    if (this.startX - endX > 50) {
      this.goToNext();
    } else if (endX - this.startX > 50) {
      this.goToPrevious();
    }
  }
}

export interface SlideInterface {
  url: string;
  title: string;
  subtitle: string;
  min: string;
  raised: string;
  descption: string;
}