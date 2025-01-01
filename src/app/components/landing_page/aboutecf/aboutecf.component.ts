import { Component, Input, OnInit } from "@angular/core";
import { LoaderService } from "src/app/service/loader.service";
import { SlideInterface } from "../main/mobileslider/slidercomponent.component";
import { whyata1, whyata2 } from "src/app/models/slide-data";

@Component({
  selector: 'main',
  templateUrl: './aboutecf.component.html',
  styleUrls: ['./aboutecf.component.scss']
})
export class AboutECF implements OnInit {
  isMobile: boolean = false;
  currentIndex: number = 0;
  @Input() slides: any[] = whyata1;  // Assign the imported slide data here
  @Input() slide2: any[] = whyata2;  // Assign the imported slide data here

  constructor(private loaderService: LoaderService) {

  }

  initialNumber = 88605955; // Starting number
  currentNumber = this.initialNumber;
  intervalId: any;

  ngOnInit() {
    this.loaderService.hide();
    this.intervalId = setInterval(() => {
      // Increment or modify the number as needed
      this.currentNumber += Math.floor(Math.random() * 1000); // Adds a random value (0-999)
    }, 2000); // Change every 2 seconds

    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });
  }

  onSlideChange(index: number): void {
    this.currentIndex = index;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clean up interval when component is destroyed
    }
  }

  getCurrentSlideUrl(index: number) {
    return `url('${this.slides[index].url}')`;
  }

  getCurrentSlideUrl2(index: number) {
    return `url('${this.slide2[index].url}')`;
  }

  obj() {
    return this.slides[this.currentIndex];
  }

  obj2() {
    return this.slide2[this.currentIndex];
  }
}
