import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './add-edit-employee/add-edit.component';
import { EmployeesComponent } from './employees.component';
import { ListComponent } from './list-of-employee/list.component';

const employeesRoutes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'employees' },
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: 'edit',
    component: AddEditComponent
  }
];

@NgModule({
  declarations: [
    AddEditComponent,
    ListComponent,
    EmployeesComponent
  ],
  imports: [
    RouterModule.forChild(employeesRoutes),
    CommonModule,
    ReactiveFormsModule
  ],
})
export class EmployeesModule { }
