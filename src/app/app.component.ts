import { Component } from '@angular/core';
import { EventsService } from './shared/services/events.service';
import { WsService } from './shared/services/ws.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'front-exam';
  constructor() {}
  ngOnInit() {

  }
}

// state('original', style({
//   transform: 'translateX(0%)'
// })),
// state('moved', style({
//   transform: 'translateX(-50%)'
// })),
// transition('original => moved', [
//   animate('0.5s ease-in-out')
// ])
