import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClientComponent } from '../client/client.component';
import { Person } from 'src/app/models/person';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UnsubscribeService } from 'src/app/services/unsubscribe.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  private person = new Person();
  private people: Person[];

  constructor(private route: ActivatedRoute, private service: UserService, private memory: UnsubscribeService) { }

  ngOnInit() {
    //this.person = this.profile.person;
    this.person.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.service.getRecordById(this.person.id).pipe(takeUntil(this.memory.unsubscribe)).subscribe(data=>this.people=data)
  }

  ngOnDestroy(){
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }

  // display(){
  //   if(this.profile.refresh){     
  //     this.ngOnInit();
  //   }
  // }
}
