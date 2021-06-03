import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Block } from '../../models';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent {
  @Input() block: Block;
  @Output() onClick = new EventEmitter<void>();

  blockClicked() {
    this.onClick.emit();
  }
}
