import { createAction } from '@ngrx/store';
import { Employee } from 'src/app/Models/employee';

export const getEmployees = createAction('[Employee] Get employees');
export const getEmployeesSuccess = createAction(
  '[Employee] Get Employees success',
  (employees: ReadonlyArray<Employee>) => ({ employees })
);

export const addEmployees = createAction(
  '[Employee] Add employees',
  (employee: Employee) => {
    return ({ employee })
  }
);
export const addEmployeesSuccess = createAction(
  '[Employee] Add employee success',
  (employee: Employee) => {
    return ({ employee })
  }
);

export const deleteEmployee = createAction(
  '[Employee] Delete employee',
  (employeeId: string) => {
    return ({ employeeId })
  }
);
export const deleteEmployeeSuccess = createAction(
  '[Employee] Delete employee success',
  (employeeId: string) => {
    return ({ employeeId })
  }
);

export const updateEmployee = createAction(
  '[Employee] Update employee',
  (employee: Employee) => ({ employee })
);
export const updateEmployeeSuccess = createAction(
  '[Employee] Update employee success',
  (employee: Employee) => ({ employee })
);
