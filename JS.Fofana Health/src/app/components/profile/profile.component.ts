import { Component, OnInit } from '@angular/core';
import { ClientComponent } from '../client/client.component';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private person = new Person();

  constructor(private profile: ClientComponent) { }

  ngOnInit() {
    this.person = this.profile.person;
  }

  // display(){
  //   if(this.profile.refresh){     
  //     this.ngOnInit();
  //   }
  // }
}
