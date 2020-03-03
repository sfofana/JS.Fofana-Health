import { Component, OnInit, OnDestroy } from '@angular/core';
import { UnsubscribeService } from 'src/app/services/unsubscribe.service';
import { UserService } from 'src/app/services/user.service';
import { Person } from 'src/app/models/person';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {

  private term: string;
  private employee = new Employee();
  private records: Person[];
  private cacheRecords: Person[];
  private noResults: string;
  private totalPages: Array<any>;
  private perPage: number = 10;
  private items = [];

  constructor(
    private session: AppComponent, 
    private service: UserService, 
    private memory: UnsubscribeService, 
    private router: Router
    ) { }

  ngOnInit() {
    
   //this.authentication();
    this.service.getAllRecords().pipe(takeUntil(this.memory.unsubscribe)).subscribe(data=>{
      this.records=data;
      this.cacheRecords=data;
      this.items = Array(this.cacheRecords.length).fill(0).map((i) => ({ id: (i + 1), name: this.cacheRecords[i+1]}));
    });
  }

  ngOnDestroy(){
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }

  authentication(){
    if(!this.session.canLogout){
      this.router.navigate(['']);
      localStorage.clear();
    }
    if(this.session.canLogout){
      this.employee = this.session.employee;
    }
  }

  profile(person: Person){
    this.router.navigate(['/profile', person.id])
  }

  search(){
    if(this.term == ''){
      this.cacheRecords = this.records;
      this.noResults = '';
    }
    if(this.term){
      this.cacheRecords = [];
      this.term = this.term.charAt(0).toUpperCase() + this.term.slice(1).toLowerCase();
      this.records.filter(data=>{
        console.log(this.cacheRecords.length);
         if(data.firstname.startsWith(this.term) ||
            data.lastname.startsWith(this.term) ||
            data.id.toString().startsWith(this.term) 
            ) {
          this.cacheRecords.push(data);
          this.noResults = '';
        }
        if(this.cacheRecords.length == 0){
          this.noResults = 'No search results found...';
        }
      });
    }
  }

  display(){

  }
  onChangePage(totalPages: Array<any>) {
    this.totalPages = totalPages;
}


}
