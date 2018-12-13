import {Component, OnInit} from '@angular/core';
import {SetFilterAction, validFilters} from '../../filter/filter.actions';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';
import {Todo} from '../model/todo';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filters: validFilters[] = ['all', 'completed', 'active'];
  currentFilter: validFilters;

  active: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.activeCounter(state.todos);
      this.currentFilter = state.filter;
    });
  }

  changeFilter(newFilter: validFilters) {
    const action = new SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  activeCounter(todos: Todo[]) {
    this.active = todos.filter(todo => !todo.completed).length;
  }

}
