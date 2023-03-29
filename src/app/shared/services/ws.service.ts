import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { io } from 'socket.io-client';
import { API_URL } from 'src/app/env';

@Injectable({
  providedIn: 'root',
})
export class WsService {
  socket = io(API_URL);
  users = new BehaviorSubject<string[]>([]);
  selectedBoad = new Subject<number>();
  thisDisplay = new Subject<boolean>();
  constructor() {}

  listenSockets() {
    this.socket.on('connectedUsers', (data) => {
      this.users.next(data);
    });
    this.socket.on('boatPosition', (data: number) => {
      console.log('paso', data, this.socket.id);
      console.log(this.users.value);
      if (this.users.value[data] === this.socket.id) {
        console.log(true);
        this.thisDisplay.next(true);
      } else {
        this.thisDisplay.next(false);
      }
    });
  }
  nextBoat() {
    console.log('nextBoat');
    this.selectedBoad.subscribe((data) => this.socket.emit('nextBoat', data));
  }
}
