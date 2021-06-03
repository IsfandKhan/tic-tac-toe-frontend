import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Tic Tac Toe';
  constructor(private router: Router) {}
  ngOnInit() {
    const { protocol, hostname, pathname } = window.location;
    const { production } = environment;

    if (production && protocol === 'http:') {
      this.router.navigateByUrl(`https://${hostname}${pathname}`);
    }
  }
}
