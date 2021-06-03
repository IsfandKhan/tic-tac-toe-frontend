import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services';
import { Game } from '../../models';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public games: Array<Game> = [];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private notifier: ToastrService
  ) {}

  ngOnInit() {
    this.getAllGames();
  }

  private getAllGames() {
    this.apiService
      .getAllGames()
      .subscribe(games => (this.games = games));
  }

  startGame() {
    this.apiService
      .createGame()
      .subscribe(location => this.router.navigateByUrl(location));
  }

  deleteGame(e, id) {
    e.stopPropagation();
    e.preventDefault();
    this.apiService.deleteGame(id).subscribe(() => {
      const gameIndex = this.games.findIndex(game => game.id === id);
      this.games.splice(gameIndex, 1);
      this.notifier.success('Game Deleted Successfully');
    });
  }
}
