import {Component, OnInit} from '@angular/core';
import {ResetAction} from '../counter.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit {

  counter: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('counter').subscribe(counter => this.counter = counter);
  }

  reset() {
    const action = new ResetAction();
    this.store.dispatch(action);
  }
}
