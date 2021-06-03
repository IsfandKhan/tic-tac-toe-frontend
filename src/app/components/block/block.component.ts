import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() data;
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  blockClicked() {
    this.onClick.emit();
  }
}
