import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [ 
  {path: 'home',component: HomeComponent},
  {path: 'client',component: ClientComponent},
  {path: 'profile/:id',component: ProfileComponent},
  {path: '**',pathMatch: 'full',redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
