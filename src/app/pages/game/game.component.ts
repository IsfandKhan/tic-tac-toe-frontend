import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../services';
import { Game, STATUS } from '../../models';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public game: Game;
  public message;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private notifier: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(() => {
      this.message = '';
      this.game = this.route.snapshot.data.game;
    });
  }

  private checkGameStatus() {
    const { status } = this.game;
    switch (status) {
      case STATUS.x_won:
        this.message = 'You Won';
        this.notifier.success(this.message);
        break;
      case STATUS.o_won:
        this.message = 'Computer Won';
        this.notifier.warning(this.message);
        break;
      case STATUS.draw:
        this.message = 'Game Drawn';
        this.notifier.info(this.message);
        break;
    }
  }

  updateBoard(index) {
    const { id, board } = this.game;
    this.apiService.placeMark(id, board, index).subscribe((game) => {
      this.game = game;
      this.checkGameStatus();
    });
  }

  deleteGame() {
    const { id } = this.game;
    this.apiService.deleteGame(id).subscribe(() => {
      this.backToHome();
      this.notifier.success('Game Deleted Successfully');
    });
  }

  backToHome() {
    this.router.navigateByUrl('/');
  }

  newGame() {
    this.apiService
      .createGame()
      .subscribe((location) => this.router.navigateByUrl(location));
  }

  gameOver() {
    this.notifier.info('Game Over!', 'Start a new game');
  }
}
