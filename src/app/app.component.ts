import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponent/todos/todos.component";
import { AddTodoComponent } from "./MyComponent/add-todo/add-todo.component";
import {FormsModule} from '@angular/forms';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, AddTodoComponent,FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
addTodo($event: Todo) {
throw new Error('Method not implemented.');
}
  title = 'to-do-list';
}
