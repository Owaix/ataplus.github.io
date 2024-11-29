import { Component } from "@angular/core";
import { SlideInterface } from "./slidercomponent/slidercomponent.component";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class Main {

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.slides.push(
        {
          url: "../../../../assets/images/AtaPlus-07.png",
          title: "Star Grower",
          subtitle: "Agriculture",
          min: "6,04,000",
          raised: "80,000",
          descption: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'"
        },
        {
          url: "../../../../assets/images/AtaPlus-08.png", title: "Andy Adams",
          subtitle: "Finance",
          min: "1,00,000",
          raised: "50,000",
          descption: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
        })
    }
  }

  slides: SlideInterface[] = [];
  reasonItems = [
    {
      reasonImageUrl: '../../../assets/images/award.png',
      reasonTitle: 'Online Banking',
      reasonContent: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
    },
    {
      reasonImageUrl: '../../../assets/images/award.png',
      reasonTitle: 'Simple Budgeting',
      reasonContent: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits..'
    },
    {
      reasonImageUrl: '../../../assets/images/icon-onboarding.svg',
      reasonTitle: 'Fast Onboarding',
      reasonContent: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
    }
  ]

  articleItems = [
    {
      articleImg: '../../../assets/images/image-currency.jpg',
      articleTitle: 'Receive money in any currency with no fees',
      articleContent: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
      articleAuthor: 'Claire Robinson'
    },
    {
      articleImg: '../../../assets/images/image-restaurant.jpg',
      articleTitle: 'Treat yourself without worrying about money',
      articleContent: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
      articleAuthor: 'Wilson Hutton'
    },
    {
      articleImg: '../../../assets/images/image-plane.jpg',
      articleTitle: 'Take your imowais card wherever you go',
      articleContent: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
      articleAuthor: 'Wilson Hutton'
    },
    {
      articleImg: '../../../assets/images/image-confetti.jpg',
      articleTitle: 'Our invite-only Beta accounts are now live!',
      articleContent: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
      articleAuthor: 'Claire Robinson'
    },
  ]
}
