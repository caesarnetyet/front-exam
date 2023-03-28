import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import {map, Observable} from "rxjs";
import { UsersService } from '../components/users/data/users.service';

@Injectable({
  providedIn: 'root'
})
export class BearerGuard  {

  constructor(private userService: UsersService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.userService.getUser().pipe(
      map((user) => {
        if (!user) {
          localStorage.removeItem('token')
          this.router.navigate(['/home']).then(r => console.log('User Not logged'));
          return false;
        }
        return true
      })
    );
  }
}