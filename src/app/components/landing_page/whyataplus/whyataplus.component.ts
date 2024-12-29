import { Component } from "@angular/core";
import { SlideInterface } from "../main/mobileslider/slidercomponent.component";

@Component({
  selector: 'main',
  templateUrl: './whyataplus.component.html',
  styleUrls: ['./whyataplus.component.scss']
})

export class WhyAtaplus {

  slides: SlideInterface[] = [];
  constructor() {
    for (let i = 0; i < 2; i++) {
      this.slides.push(
        {
          url: "../../../../assets/images/AtaPlus-07.png",
          title: "Star Grower",
          subtitle: "Agriculture",
          min: "6,04,000",
          raised: "80,000",
          descption: "Stargrower cultivates dragon fruits and gingers to address food security challenges. The company aims to ensure a consistent, reliable supply to meet consumer's nutritional needs, revolutionizing how the world thinks about and consumes these vital crops."
        },
        {
          url: "../../../../assets/images/AtaPlus-08.png",
          title: "Andy Adams",
          subtitle: "Finance",
          min: "1,00,000",
          raised: "50,000",
          descption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        },
        {
          url: "../../../../assets/images/images.jpeg",
          title: "Andy Adams",
          subtitle: "Finance",
          min: "1,00,000",
          raised: "50,000",
          descption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        })
    }
  }
}

