import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todo: DataService) { }

  ngOnInit() {
    this.todo.getTodo().subscribe(
      (data: Todo[]) => this.todos = data
    );
  }

  done(todo) {
    this.todo.checkTodoItem(todo).subscribe(
      (data: Todo[]) => this.todos = data
    );
  }

  remove(todo) {
    this.todo.removeTodoItem(todo).subscribe(
      (data: Todo[]) => this.todos = data
    )
  }
}
