import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { API_URL } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class WsService {
  socket = io(API_URL);
}

