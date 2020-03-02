import { Component, OnInit, OnDestroy } from '@angular/core';
import { UnsubscribeService } from 'src/app/services/unsubscribe.service';
import { UserService } from 'src/app/services/user.service';
import { Person } from 'src/app/models/person';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit, OnDestroy {

  private term: string;
  public person = new Person();
  private records: Person[];
  private show = false;
  public refresh = false;

  constructor(private service: UserService, private memory: UnsubscribeService, private router: Router) { }

  ngOnInit() {
    this.service.getAllRecords().pipe(takeUntil(this.memory.unsubscribe)).subscribe(data=>this.records=data);
  }

  ngOnDestroy(){
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }

  profile(person: Person){
    this.router.navigate(['/profile', person.id])
    this.person = person;
    console.dir(person);
  }
}
