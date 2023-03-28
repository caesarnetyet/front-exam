import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { API_URL } from 'src/app/env';
import { User } from 'src/app/interfaces/user';
import { Token} from 'src/app/interfaces/token';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(API_URL + '/users', user).pipe(
      tap((message) => console.log('user created successfully', message)),
      catchError(
        (error) => {
          console.log(error);
          throw error;
        }
      )
    );
  }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(API_URL + '/users/login', user).pipe(
      tap((message) => console.log('user logged in successfully', message)),
      catchError(
        (error) => {
          console.log(error);
          throw error;
        }
      )
    );
  }

  getUser(): Observable<User> {
    return this.http.get<User>(API_URL + '/user').pipe(
      tap((message) => console.log('user fetched successfully', message)),
      catchError(
        (error) => {
          console.log(error);
          throw error;
        }
      )
    );
  }
}
