import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import 'firebase/database';
import { query } from '@angular/animations';
import { UnsubscribeService } from './services/unsubscribe.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = "JS.Fofana Bank";
  // validatingForm: FormGroup;
  // public user = new User();
  private email = "";
  private password = "";
  private success ="";
  private invalid ="";
  private sessionSet = 'set';
  public canLogout = false;
  database: AngularFireList<any>;
  results: any[];
  result: any;

  constructor(private service: UserService, private memory: UnsubscribeService) {}

  ngOnInit() {
    //this.database = this.repository.list('/JSFofanaHealth/user');
    //this.database.push({name: 'alhaji'});
    //this.results = database.valueChanges();
    // this.repository.list('/JSFofanaHealth/user', ref => ref.orderByChild('name').equalTo('alhaji')).valueChanges().subscribe(data=>{
    //     this.results=data;
    //     console.log(this.results);
    //   });
    this.service.authentication('sufyan@gmail.com').pipe(takeUntil(this.memory.unsubscribe)).subscribe(data=>{
      if(data.length == 0){
        console.log('Invalid email or password');
      }
      this.results=data;    
    });
  }

  ngOnDestroy(){
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
}
