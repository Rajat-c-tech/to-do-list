import { Component } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
 imports:      [  CommonModule ]

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddTodoComponent,FormsModule,CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'

})
export class TodosComponent {
  localItem!:string;
  todos!: Todo[];
title: any;
  constructor(){
  this.localItem = localStorage.getItem("todos");
  if(this.localItem==null)
    {
    this.todos=[];
  }
  else{
    console.log("this is good")
    this.todos=JSON.parse(this.localItem)
  }
   
  }
 deleteTodo(todo:Todo){
  console.log(this.todos);
  console.log("This delete is also called.")
  const index=this.todos.indexOf(todo);
  this.todos.splice(index,1)
  localStorage.setItem("todos",JSON.stringify(this.todos));

 }

 addTodo(todo:Todo){
  console.log(todo);
  this.todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(this.todos));


  }
}
