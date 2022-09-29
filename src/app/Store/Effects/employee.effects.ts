import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {
    catchError,
    concatMap,
    exhaustMap,
    map,
    mergeMap,
    tap
} from 'rxjs/operators';
import { addEmployees, addEmployeesSuccess, deleteEmployee, deleteEmployeeSuccess, getEmployees, getEmployeesSuccess, updateEmployee, updateEmployeeSuccess } from '../Actions/employee.action';
import { DataService } from '../Services/data.service';

@Injectable()
export class EmployeeEffects {
    loadEmployees$ = createEffect(() =>
        this.action$.pipe(
            ofType(getEmployees),
            exhaustMap(() =>
                this.dataService.getEmployees().pipe(
                    map((movies) => {
                        return getEmployeesSuccess(movies.map(d => d.payload.doc.data()))
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    addEmployees$ = createEffect(() =>
        this.action$.pipe(
            ofType(addEmployees),
            tap((employee) => console.log(employee)),
            concatMap(({ employee }) =>
                this.dataService.addEmployee(employee).pipe(
                    map((newEmployee) => addEmployeesSuccess(newEmployee)),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    deletEmployee$ = createEffect(() =>
        this.action$.pipe(
            ofType(deleteEmployee),
            mergeMap(({ employeeId }) =>
                this.dataService.deleteEmployee(employeeId).pipe(
                    map(() => deleteEmployeeSuccess(employeeId)),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    updateEmployee$ = createEffect(() =>
        this.action$.pipe(
            ofType(updateEmployee),
            concatMap(({ employee }) =>
                this.dataService.updateEmployees(employee).pipe(
                    map(() => updateEmployeeSuccess(employee)),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private action$: Actions, private dataService: DataService) { }
}