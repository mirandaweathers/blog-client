import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { BlogcardComponent } from './blogcard/blogcard.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { EditpostComponent } from './editpost/editpost.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
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
  },
  {
    path: 'new-post',
    component: CreatepostComponent
  },
  {
    path: 'edit-post',
    component: EditpostComponent
  },
  {
    path: 'new-user',
    component: NewuserComponent
  },
  {
    path: 'add-comment',
    component: AddcommentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
