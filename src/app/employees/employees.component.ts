import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { EmployeeState } from 'src/app/Store/Reducers/employee.reducers';
import { getEmployees } from '../Store/Actions/employee.action';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees$ = this.store.pipe(select('employees'));
  constructor(private store: Store<EmployeeState>) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }
  getAllEmployees(): void {
    this.store.dispatch(getEmployees());
  }
}
