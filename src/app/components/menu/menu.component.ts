import { Component } from '@angular/core';
import { WsService } from 'src/app/shared/services/ws.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private ws: WsService){}

}