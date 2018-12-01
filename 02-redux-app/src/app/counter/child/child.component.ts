import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() counter: number;
  @Output() changedCounter = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  multiply() {
    this.counter *= 2;
    this.changedCounter.emit(this.counter);
  }

  divide() {
    this.counter /= 2;
    this.changedCounter.emit(this.counter);
  }

  resetGrandchild(event) {
    this.counter = event;
    this.changedCounter.emit(this.counter);
  }
}
