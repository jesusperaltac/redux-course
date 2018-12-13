import {Component, OnInit} from '@angular/core';
import {SetFilterAction, validFilters} from '../../filter/filter.actions';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filters: validFilters[] = ['all', 'completed', 'active'];
  currentFilter: validFilters;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
    });
  }

  changeFilter(newFilter: validFilters) {
    const action = new SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

}
