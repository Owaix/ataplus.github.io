import { Component, OnInit } from "@angular/core";
import { LoaderService } from "src/app/service/loader.service";
import { SlideInterface } from "../main/mobileslider/slidercomponent.component";

@Component({
  selector: 'main',
  templateUrl: './aboutecf.component.html',
  styleUrls: ['./aboutecf.component.scss']
})
export class AboutECF implements OnInit {
  isMobile: boolean = false;

  constructor(private loaderService: LoaderService) {
    for (let i = 0; i < 2; i++) {
      this.slides.push(
        {
          url: "../../../../assets/images/AtaPlus-53.png",
          title: "Effortless",
          subtitle: "Agriculture",
          min: "6,04,000",
          raised: "80,000",
          descption: "Whether you're a beginner or experienced investor, investing on Ata Plus is simple."
        },
        {
          url: "../../../../assets/images/AtaPlus-54.png",
          title: "Andy Adams",
          subtitle: "Finance",
          min: "1,00,000",
          raised: "50,000",
          descption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        },
        {
          url: "../../../../assets/images/AtaPlus-55.png",
          title: "Andy Adams",
          subtitle: "Finance",
          min: "1,00,000",
          raised: "50,000",
          descption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        })
    }
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

  slides: SlideInterface[] = [];
}