import { Component } from '@angular/core';
import { WsService } from './shared/services/ws.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'front-exam';
  constructor(private ws: WsService) {}
  ngOnInit() {
    this.ws.socket.emit('message', 'Hello from Angular')
    this.ws.socket.on('news', (data) => {
      console.log(data)
    });
  }  
}
