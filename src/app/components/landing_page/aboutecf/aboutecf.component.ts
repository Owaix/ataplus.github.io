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
          class: "icon1",
          subtitle: "Agriculture",
          min: "6,04,000",
          raised: "80,000",
          descption: "Whether you're a beginner or experienced investor, investing on Ata Plus is simple."
        },
        {
          url: "../../../../assets/images/AtaPlus-54.png",
          title: "SC Regulated",
          subtitle: "Finance",
          class: "icon2",
          min: "1,00,000",
          raised: "50,000",
          descption: "Fundraising campaigns are hosted on a platform that is approved & regulated by the Securities Commission (SC) Malaysia."
        },
        {
          url: "../../../../assets/images/AtaPlus-55.png",
          title: "Invest with a<br> Piece of mind",
          class: "icon3",
          subtitle: "Finance",
          min: "1,00,000",
          raised: "50,000",
          descption: "Rest assured that we conduct detailed DD before a campaign can be listed on Ata Plus. Nevertheless, you should conduct your own assessment before investing."
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
