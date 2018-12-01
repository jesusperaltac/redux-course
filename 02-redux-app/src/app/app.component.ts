import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number;

  constructor() {
    this.counter = 10;
  }

  increase() {
    this.counter += 1;
  }

  decrease() {
    this.counter -= 1;
  }
}
