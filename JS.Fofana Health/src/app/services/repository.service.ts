import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, throwError } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private userDB = '/JSFofanaHealth/user';
  private personDB = '/JSFofanaHealth/person';
  private empQuery = 'email';
  private perQuery = 'id';

  constructor(private repository: AngularFireDatabase) { }

  userData(email: string): Observable<Employee[]>{
    return this.repository.list<Employee>(this.userDB, ref => ref.orderByChild(this.empQuery).equalTo(email)).valueChanges();
  }
}
