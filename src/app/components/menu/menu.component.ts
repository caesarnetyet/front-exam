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
  boatIndex?: number;
  socketId?: string;
  thisDisplay = false;
  constructor(private ws: WsService) {}

  ngOnInit(): void {
    this.ws.users.subscribe((data) => (this.users = data));
    this.ws.selectedBoad.subscribe((data) => (this.boatIndex = data));
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
}
