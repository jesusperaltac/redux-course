import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputTag') txtInputTag: ElementRef;

  checkField: FormControl;
  txtInput: FormControl;
  editing: boolean;

  constructor() {
  }

  ngOnInit() {
    console.log(this.todo);
    this.checkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  edit() {
    this.editing = true;
    setTimeout(() => {
      this.txtInputTag.nativeElement.select();
    }, 1);
  }

  finishEdition() {
    this.editing = false;
  }

}
