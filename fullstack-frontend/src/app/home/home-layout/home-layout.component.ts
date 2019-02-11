import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Employee {

  empId: number;
  fname: string;
  lname: string;
  age: string;
  department: string;

}


@Component({
  selector: 'k-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  displayedColumns: string[] = ['empId', 'fName', 'lName', 'age', 'department'];
  data: Employee[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Employee[]>('/api/employee').subscribe(r => this.data = r);
  }

}
