import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { API_URL } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  socket = io(API_URL);
  connected(user_id: number){
    this.socket.emit('connected', user_id);
  }
  disconnected(user_id: number){
    this.socket.emit('disconnected', user_id);
  }
}

