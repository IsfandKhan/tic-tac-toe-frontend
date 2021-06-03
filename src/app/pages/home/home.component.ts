import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private notifier: ToastrService
  ) {}
  startGame() {
    this.apiService.createGame().subscribe(
      (location) => {
        this.router.navigateByUrl(location);
      },
      (err) => {
        this.notifier.error(err.error.reason || 'No Internet/Server Connection available');
      }
    );
  }
}
