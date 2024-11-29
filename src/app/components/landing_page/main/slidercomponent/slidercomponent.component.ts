import { Component, Input } from '@angular/core';

@Component({
  selector: 'image-slider',
  templateUrl: './slidercomponent.component.html',
  styleUrls: ['./slidercomponent.component.scss']
})

export class SliderComponent {
  @Input() slides: SlideInterface[] = [];
  currentIndex: number = 0;

  getCurrentSlideUrl() {
    return `url('${this.slides[this.currentIndex].url}')`;
  }
  obj() {
    return this.slides[this.currentIndex];
  }
  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}

export interface SlideInterface {
  url: string;
  title: string;
  subtitle: string,
  min: string,
  raised: string,
  descption: string
}