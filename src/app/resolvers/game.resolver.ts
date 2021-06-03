import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Game } from '../models';
import { ApiService } from '../services';

@Injectable({ providedIn: 'root' })
export class GameResolver implements Resolve<Game> {
  constructor(private apiService: ApiService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Game> {
    return this.apiService.getGame(route.paramMap.get('id')).pipe(
      catchError((err) => {
        this.router.navigateByUrl('/');
        return throwError(err);
      })
    );
  }
}
