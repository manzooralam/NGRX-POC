import {
  createReducer,
  on
} from '@ngrx/store';
import { Employee } from 'src/app/Models/employee';
import { addEmployeesSuccess, deleteEmployeeSuccess, getEmployeesSuccess, updateEmployeeSuccess } from '../Actions/employee.action';


export interface EmployeeState {
  employees: ReadonlyArray<Employee>;
}

const initialState: ReadonlyArray<Employee> = [];

export const employeeReducer = createReducer(
  initialState,
  on(getEmployeesSuccess, (state, { employees }) => [...employees]),
  on(addEmployeesSuccess, (state, { employee }) => {
    console.log(state, employee);
    return [...state, employee]
  }),
  on(deleteEmployeeSuccess, (state, { employeeId }) => {
    console.log(state, employeeId);
    return state.filter((employee) => employee.id !== employeeId)
  }
  ),
  on(updateEmployeeSuccess, (state, { employee }) => {
    const employees = state.map((m) => {
      if (m.id === employee.id) {
        return employee;
      }
      return m;
    });
    return employees;
  })
);