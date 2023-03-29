import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrls: ['./barco.component.css'],
  animations: [
    trigger('moveInLeft', [
      transition('void => *', [
        style({ transform: 'translateX(500%)' }),
        animate(3000),
      ]),
    ]),
  ],
})
export class BarcoComponent {
  state: string = 'original';

  moveImage() {
    this.state = this.state === 'original' ? 'moved' : 'original';
  }

  onAnimationDone() {
    console.log('Animation Done');
  }
}
