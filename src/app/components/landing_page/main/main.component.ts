import { Component, Input, OnInit } from "@angular/core";
import { LoaderService } from "src/app/service/loader.service";
import { whyata3 } from "src/app/models/slide-data";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('countAnimation', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('300ms cubic-bezier(0.4, 0, 1, 1)', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms cubic-bezier(0.4, 0, 1, 1)', style({ transform: 'scale(1.5)', opacity: 0 }))
      ])
    ])
  ]
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
