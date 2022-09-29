import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subscription, take } from 'rxjs';
import { Employee } from 'src/app/Models/employee';
import { addEmployees, updateEmployee } from 'src/app/Store/Actions/employee.action';
import { EmployeeState } from 'src/app/Store/Reducers/employee.reducers';
import { getEmployeeByIdSelector } from 'src/app/Store/Selector/employee.selector';
import { DataService } from 'src/app/Store/Services/data.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  employeeForm = this.formBuilder.group({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    joiningDate: new FormControl(),
  })
  newEmployee: Employee = new Employee();

  routerSubcription?: Subscription;
  unsubcription?: Subscription

  constructor(private store: Store<EmployeeState>,
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.unsubcription = this.dataService.selectedEditEmployee.subscribe((employeeDetails: any) => {
      if (employeeDetails) this.initForm(employeeDetails)
    })
  }
  async getEditEmployee(employeeId: string) {
    return this.store.pipe(select(getEmployeeByIdSelector(employeeId)), take(1)).toPromise();
  }
  initForm(employee: any) {
    const date = new Date(employee.joiningDate.seconds * 1000);
    const yyyy = date.getFullYear();
    const mm = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    const dd = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    this.employeeForm.setValue({
      ...employee,
      joiningDate: yyyy + '-' + mm + '-' + dd
    })
  }
  updateEmployee() {
    const updateData = this.employeeForm.value;
    const movie: Employee = {
      id: updateData.id,
      name: updateData.name,
      email: updateData.email,
      joiningDate: new Date(updateData.joiningDate) || new Date()
    }
    this.store.dispatch(updateEmployee(movie))
  }
  back() {
    this.employeeForm.reset();
    this.router.navigate(['/employees']);
  }
  ngOnDestroy() {
    this.routerSubcription?.unsubscribe();
    this.unsubcription?.unsubscribe()
  }
  addNewEmployees(): void {
    this.newEmployee = {
      id: '',
      name: this.employeeForm.value.name,
      email: this.employeeForm.value.email,
      joiningDate: new Date(this.employeeForm.value.joiningDate) || new Date(),
    }
    this.store.dispatch(addEmployees(this.newEmployee));
    this.employeeForm.reset();
  }
}
