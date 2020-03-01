import { Injectable } from '@angular/core';
import { RepositoryService } from './repository.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private repository: RepositoryService) { }

  authentication(email:string): Observable<any[]>{
    return this.repository.userData(email);
  }
}
