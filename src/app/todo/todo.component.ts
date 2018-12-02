import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo[];

  constructor(private todos: DataService) { }

  ngOnInit() {
    this.todos.getTodos().subscribe(
      (data: Todo[]) => this.todo = data
    );
  }
}
