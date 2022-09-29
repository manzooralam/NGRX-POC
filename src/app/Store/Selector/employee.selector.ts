import { createSelector } from '@ngrx/store';
import { Employee } from 'src/app/Models/employee';
import { EmployeeState } from '../Reducers/employee.reducers';

export const employeesSelector = createSelector(
    (state: EmployeeState) => state.employees,
    (employees: ReadonlyArray<Employee>) => employees
);
export const getEmployeeByIdSelector = (employeeId: string) =>
    createSelector(employeesSelector, (employees) => {
        return employees.find((employee: Employee) => employee.id == employeeId);
    });

