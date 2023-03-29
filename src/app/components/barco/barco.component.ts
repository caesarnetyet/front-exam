import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { WsService } from 'src/app/shared/services/ws.service';

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
export class BarcoComponent implements OnInit {
  state: string = 'original';
  boatIndex?: number;
  boats: string[] = [];
  constructor(private ws: WsService) {}
  thisDisplay = false;
  ngOnInit(): void {
    this.ws.selectedBoad.subscribe((data) => (this.boatIndex = data));
    this.ws.thisDisplay.subscribe((data) => (this.thisDisplay = data));
    this.ws.boats.subscribe((data) => {
      this.boats = data
      console.log(data)
    });
  }
  moveImage() {
    this.state = this.state === 'original' ? 'moved' : 'original';
  }

  onAnimationDone() {
    console.log('done')
    const position = this.boats.indexOf(this.ws.socket.id) +1;
    if (position === this.boats.length) {
      this.ws.socket.emit('nextBoat', 0);
    }else {
      console.log(position)
      this.ws.socket.emit('nextBoat', position);
    }

    this.thisDisplay = false
  }
}
