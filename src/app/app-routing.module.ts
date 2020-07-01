import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import {HomeComponent} from './pages/home/home.component';

  



const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
