import { Component, EventEmitter, Output } from '@angular/core';
import {Input} from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
 
  todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  onClick(todo:Todo){
    console.log(todo.title)
    this.todoDelete.emit(todo);
    console.log("onClick has been trigerred")
  }

}
