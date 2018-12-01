import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit {

  @Input() counter: number;
  @Output() changedCounter = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  reset() {
    this.counter = 0;
    this.changedCounter.emit(this.counter);
  }
}
