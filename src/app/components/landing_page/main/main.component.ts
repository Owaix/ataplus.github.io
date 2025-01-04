import { Component, Input, OnInit } from "@angular/core";
import { LoaderService } from "src/app/service/loader.service";
import { SlideInterface } from "./mobileslider/slidercomponent.component";
import { whyata3 } from "src/app/models/slide-data";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class Main implements OnInit {
  isMobile: boolean = false;
  @Input() slides: any[] = whyata3;

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

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clean up interval when component is destroyed
    }
  }

}
