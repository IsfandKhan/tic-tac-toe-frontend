import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Game } from '../models';

@Injectable()
export class ApiService {
  private gamesUrl = environment.production
    ? window.location.protocol + environment.apiUrl
    : '/api/v1/games';

  constructor(private http: HttpClient) {}

  getAllGames() {
    return this.http.get<Array<Game>>(this.gamesUrl);
  }

  createGame() {
    return this.http
      .post<{ location: string }>(`${this.gamesUrl}`, { board: '---------' })
      .pipe(map((res) => res.location));
  }

  getGame(id: string) {
    return this.http.get<Game>(`${this.gamesUrl}/${id}`);
  }

  placeMark(id: string, board: string, index: number) {
    return this.http.put<Game>(`${this.gamesUrl}/${id}`, { board, index });
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.gamesUrl}/${id}`);
  }
}
