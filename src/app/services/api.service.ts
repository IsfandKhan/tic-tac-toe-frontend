import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private gamesUrl = '/api/v1/games';
  board = '---------';
  constructor(private http: HttpClient) {}

  createGame() {
    return this.http
      .post(`${this.gamesUrl}`, { board: this.board })
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
}
