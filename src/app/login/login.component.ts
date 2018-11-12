import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Observable } from "rxjs/index";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private data: DataService) { }

  ngOnInit() {
  }


  getTest() {
    this.data.getTest().subscribe(
      data => console.log(data)
    );
  }

}
