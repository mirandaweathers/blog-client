import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ViewpostsComponent } from './viewposts/viewposts.component';

const routes: Routes = [
  {
    path: '',
    component: ViewpostsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'account',
    component: EditaccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
