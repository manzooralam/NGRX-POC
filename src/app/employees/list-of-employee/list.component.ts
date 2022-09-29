import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Employee } from 'src/app/Models/employee';
import { deleteEmployee } from 'src/app/Store/Actions/employee.action';
import { EmployeeState } from 'src/app/Store/Reducers/employee.reducers';
import { DataService } from 'src/app/Store/Services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  employees$ = this.store.pipe(select('employees'));
  employeeData: any;
  constructor(private store: Store<EmployeeState>,
    private dataService: DataService) { }
  ngOnInit(): void {
    this.employees$
      .subscribe((data) => console.log(this.employeeData = JSON.parse(JSON.stringify(data))));
  }

  selectEmployeeEdit(employee: Employee) {
    this.dataService.selectedEditEmployee.next(employee);
  }
  selectEmployeeDelete(employeeId: string) {
    this.store.dispatch(deleteEmployee(employeeId));
  }
  getSecond(timestamp: any) {
    return timestamp.seconds * 1000
  }
}