import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [
  {
    path: '',
    title: 'Employees Management',
    component: EmployeesComponent,
    children: [
      {
        path: 'employees',
        loadChildren: () => import('../app/employees/employees.module').then(m => m.EmployeesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
