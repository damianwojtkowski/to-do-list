import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from "./todo";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTodo() {
    return this.http.get<Todo[]>('/api/todo');
  }

  checkTodoItem(todo: Todo) {
    return this.http.put<Todo[]>('/api/checkTodo', todo);
  }
}
