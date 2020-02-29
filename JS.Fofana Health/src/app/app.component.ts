import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "JS.Fofana Bank";
  // validatingForm: FormGroup;
  // public user = new User();
  private email = "";
  private password = "";
  private success ="";
  private invalid ="";
  private sessionSet = 'set';
  public canLogout = false;

}
