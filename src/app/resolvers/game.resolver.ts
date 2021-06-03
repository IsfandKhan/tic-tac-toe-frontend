import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from '../models';
import { ApiService } from '../services';

@Injectable({ providedIn: 'root' })
export class GameResolver implements Resolve<Game> {
  constructor(private apiService: ApiService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Game> {
    return this.apiService.getGame(route.paramMap.get('id'));
  }
}
