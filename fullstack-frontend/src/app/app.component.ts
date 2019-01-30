import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

export interface Employee {

  empId: number;
  fname: string;
  lname: string;
  age: string;
  department: string;


}


@Component({
  selector: 'k-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fullstack-frontend';

  displayedColumns: string[] = ['empId', 'fName', 'lName', 'age', 'department'];
  data: Employee[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Employee[]>('/api/employee').pipe(tap(r => console.log(r))).subscribe(r => this.data = r);
  }

}
