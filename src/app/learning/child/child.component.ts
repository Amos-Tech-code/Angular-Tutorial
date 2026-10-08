import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() title = '';

  @Input() step = 0;

  @Output() clicked = new EventEmitter<number>();

  counter: number = 0;

  increment() {
    this.counter += this.step;
    this.clicked.emit(this.counter);
  }

}
