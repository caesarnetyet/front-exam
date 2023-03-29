import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Socket } from 'socket.io-client';
import { WsService } from 'src/app/shared/services/ws.service';
import { UsersService } from '../users/data/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {


  users: string[] = [];
  boats: string[] = []
  boatIndex?: number;
  socketId?: string;
  startEnabled: boolean = false;
  thisDisplay = false;
  selectedPosition?: number;
  constructor(private ws: WsService) {}

  ngOnInit(): void {
    this.ws.users.subscribe((data) => (this.users = data));
    this.ws.selectedBoad.subscribe((data) => (this.boatIndex = data));
    this.ws.boats.subscribe(data => this.boats = data)
    this.ws.startEnabled.subscribe(data => this.startEnabled = data)
    this.ws.listenSockets();
    this.ws.thisDisplay.subscribe((data) => (this.thisDisplay = data));
  }
  ngOnDestroy(): void {
    this.ws.socket.close();
  }



  selectedBoat(boatIndex: number) {
    console.log('paso 1', boatIndex);
    this.ws.socket.emit('start', boatIndex);
  }
    startBoat() {
   this.ws.socket.emit('start', 0)
    }

  sendPosition() {
    this.ws.socket.emit('myPosition', this.selectedPosition);
    }
}
