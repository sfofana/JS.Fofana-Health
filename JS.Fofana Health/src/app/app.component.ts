import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { UnsubscribeService } from './services/unsubscribe.service';
import { takeUntil } from 'rxjs/operators';
import { Employee } from './models/employee';
import { Router } from '@angular/router';
import { Person } from './models/person';

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
  private user = new Employee();
  private employee = new Employee();
  private person = new Person();
  results: any[];

  constructor(private service: UserService, private memory: UnsubscribeService, private router: Router, private repository: AngularFireDatabase) {}

  ngOnInit() {
   this.user.email='master@yahoo.com';
   this.user.firstname='Zara';
   this.user.lastname='Koroma';
   this.user.password='demo';
   this.person.id=1124162144;
   this.person.firstname='Foday';
   this.person.lastname='Bangura';
   this.person.plan='High Deductible';
   this.person.provider='Revature Health';
   this.person.deductibles='$9600';
  }

  ngOnDestroy(){
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
  }
  add(){
    //this.repository.list('/JSFofanaHealth/user').push(this.user);
    //this.repository.list('/JSFofanaHealth/person').push(this.person);
  }

  login(){
    this.service.authentication(this.email).pipe(takeUntil(this.memory.unsubscribe)).subscribe(data=>{
      if(data.length == 0){
        this.cancel();
        this.invalid = 'Invalid email or password';
      }
      for(let res of data)
      {
        if(!(res.email == this.email) || !(res.password == this.password)){
          this.cancel();
          this.invalid = 'Invalid email or password';
          this.employee = res;
        }
        if(res.email == this.email && res.password == this.password){
          this.cancel();
          this.success = 'Successful Login';
          this.router.navigate(['client']);
          this.canLogout=true;
          this.employee = res;
        }   
      } 
    });
  }

  cancel(){
    this.email="";
    this.password="";
    this.success="";
    this.invalid="";
  }

  logout(){
    this.router.navigate(['']);
    localStorage.clear();
    this.canLogout=false;
  }

}
