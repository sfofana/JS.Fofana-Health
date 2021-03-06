import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { UnsubscribeService } from './services/unsubscribe.service';
import { takeUntil } from 'rxjs/operators';
import { Employee } from './models/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = "JS.Fofana Health";
  // validatingForm: FormGroup;
  // public user = new User();
  private email = "";
  private password = "";
  private success ="";
  private invalid ="";
  private sessionSet = 'set';
  public canLogout = false;
  
  public employee = new Employee();
  results: any[];

  constructor(private service: UserService, private memory: UnsubscribeService, private router: Router) {}

  ngOnInit() {
  }

  ngOnDestroy(){
    this.memory.unsubscribe.next();
    this.memory.unsubscribe.complete();
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
          localStorage[data[0].email]= this.sessionSet;
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
