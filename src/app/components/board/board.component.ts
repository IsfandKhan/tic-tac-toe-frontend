import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() board: string;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  clicked(index: number) {
    this.onClick.emit(index);
  }
}
