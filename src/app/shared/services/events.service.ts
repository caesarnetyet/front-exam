import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventSource = new EventSource('http://localhost:3333/events');
  constructor() { }
  
  getEvents() {
    this.eventSource.addEventListener('message', (event) => {
      console.log(event);
    });
    this.eventSource.addEventListener('other', (event) => {
      console.log(event.data);
    })
  }
}
