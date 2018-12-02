import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {DecrementAction, IncrementAction} from './counter/counter.actions';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number;

  constructor(private store: Store<AppState>) {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  increase() {
    const action = new IncrementAction();
    this.store.dispatch(action);
  }

  decrease() {
    const action = new DecrementAction();
    this.store.dispatch(action);
  }
}
