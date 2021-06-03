import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public games;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private notifier: ToastrService
  ) {}

  ngOnInit() {
    this.getAllGames();
  }

  private getAllGames() {
    this.apiService.getAllGames().subscribe((res) => {
      this.games = res;
    });
  }

  startGame() {
    this.apiService.createGame().subscribe(
      (location) => {
        this.router.navigateByUrl(location);
      },
      (err) => {
        this.notifier.error(
          err.error.reason || 'No Internet/Server Connection available'
        );
      }
    );
  }
}
