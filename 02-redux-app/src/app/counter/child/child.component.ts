import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {DivideAction, MultiplyAction} from '../counter.actions';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  counter: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => {
      this.counter = counter;
    });
  }

  multiply() {
    const action = new MultiplyAction(2);
    this.store.dispatch(action);
  }

  divide() {
    const action = new DivideAction(2);
    this.store.dispatch(action);
  }

  resetGrandchild(event) {
    this.counter = event;
    //this.changedCounter.emit(this.counter);
  }
}
