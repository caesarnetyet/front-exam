import { Component } from '@angular/core';
import { EventsService } from './shared/services/events.service';
import { WsService } from './shared/services/ws.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'front-exam';
  constructor(private source: EventsService,private ws: WsService) {}
  ngOnInit() {
    this.source.getEvents();
  }  
}
