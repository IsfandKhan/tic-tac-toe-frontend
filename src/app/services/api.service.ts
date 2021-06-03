import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  private gamesUrl = environment.production
    ? environment.apiUrl
    : '/api/v1/games';

  constructor(private http: HttpClient) {}

  getAllGames() {
    return this.http.get(this.gamesUrl);
  }
  createGame() {
    return this.http
      .post(`${this.gamesUrl}`, { board: '---------' })
      .pipe(map((res: any) => res.location));
  }

  getGame(id) {
    return this.http.get(`${this.gamesUrl}/${id}`);
  }

  placeMark(id, board, index) {
    return this.http.put(`${this.gamesUrl}/${id}`, { board, index });
  }

  deleteGame(id) {
    return this.http.delete(`${this.gamesUrl}/${id}`);
  }

  checkMove(id, board, index) {
    return this.http.get(`${this.gamesUrl}/${id}/move`, {
      params: {
        board,
        index
      }
    });
  }
}
