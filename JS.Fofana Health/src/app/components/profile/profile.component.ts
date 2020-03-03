import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UnsubscribeService } from 'src/app/services/unsubscribe.service';
import { takeUntil } from 'rxjs/operators';
import { AppComponent } from 'src/app/app.component';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private person = new Person();
  private people: Person[];
  private employee = new Employee();

  constructor(
    private session: AppComponent,
    private route: ActivatedRoute,
    private router: Router, 
    private service: UserService, 
    private memory: UnsubscribeService
    ) { }

  ngOnInit() {
    //this.authentication();
    this.person.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.getRecordById(this.person.id).pipe(takeUntil(this.memory.unsubscribe)).subscribe(data=>this.people=data)
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

  search(){
    this.router.navigate(['/client']);
  }
}
