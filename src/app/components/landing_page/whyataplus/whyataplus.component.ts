import { Component, Input } from "@angular/core";
import { SlideInterface } from "../main/mobileslider/slidercomponent.component";
import { whyata1, whyata3 } from "src/app/models/slide-data";

@Component({
  selector: 'main',
  templateUrl: './whyataplus.component.html',
  styleUrls: ['./whyataplus.component.scss']
})

export class WhyAtaplus {

  currentIndex: number = 0;
  @Input() slides: any[] = whyata3;
  constructor() {
    for (let i = 0; i < 2; i++) {
      this.slides.push(
      )
    }
  }

  getCurrentSlideUrl(index: number) {
    return `url('${this.slides[index].url}')`;
  }

  obj() {
    return this.slides[this.currentIndex];
  }

  onSlideChange(index: number): void {
    this.currentIndex = index;
  }

}

