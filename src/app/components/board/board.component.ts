import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board;
  @Output() onClick = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  clicked(index) {
    this.onClick.emit(index);
  }
}
