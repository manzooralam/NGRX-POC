import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of, Subject } from 'rxjs';
import { Employee } from 'src/app/Models/employee';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private userChildrenCollRef = this.afs.collection('Users').doc('lCswn59e6Tg1OJ8dKCDm3TWaIyI2').
    collection('Student');
  selectedEditEmployee = new Subject();
  constructor(private http: HttpClient, private afs: AngularFirestore) { }

  getEmployees(): Observable<ReadonlyArray<any>> {
    return this.userChildrenCollRef.snapshotChanges()
  }
  addEmployee(employee: Employee): Observable<Employee> {
    const docId = this.afs.createId();
    this.userChildrenCollRef.doc(docId).set({ ...employee, id: docId });
    return of({ ...employee, id: docId })
  }
  deleteEmployee(employeeId: string) {
    return of(this.userChildrenCollRef.doc(employeeId).delete().then().catch(err => err))
  }
  updateEmployees(employee: Employee): Observable<any> {
    this.userChildrenCollRef.doc(employee.id).update(employee);
    return of(employee)
  }
}