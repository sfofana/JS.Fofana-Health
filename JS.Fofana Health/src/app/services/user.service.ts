import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private repository: RepositoryService) { }

  authentication(email:string): Observable<Employee[]>{
    return this.repository.userData(email);
  }
}
