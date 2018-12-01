import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Object;

  constructor(private todos: DataService) { }

  ngOnInit() {
    this.todos.getTodos().subscribe(
      data => this.todo = data
    );
    console.log(this.todo);
  }
}
