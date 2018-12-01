import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { TodoComponent } from "./todo/todo.component";
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'todos', component: TodoComponent, canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '**', redirectTo: 'todos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
