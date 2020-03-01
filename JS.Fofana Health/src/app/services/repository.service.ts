import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private userDB = '/JSFofanaHealth/user';
  private personDB = '/JSFofanaHealth/person';

  constructor(private repository: AngularFireDatabase) { }

  userData(email: string): Observable<any[]>{
    return this.repository.list(this.userDB, ref => ref.orderByChild('name').equalTo(email)).valueChanges();
  }
}
