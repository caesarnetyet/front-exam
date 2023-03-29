import { Component, OnInit } from '@angular/core';
import { WsService } from 'src/app/shared/services/ws.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private ws: WsService) {}

  ngOnInit(): void {
    this.ws.connected();
  }
  ngOnDestroy(): void {
    this.ws.socket.close();
  }
}
