import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { ViewpostsComponent } from './viewposts/viewposts.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { ViewcommentsComponent } from './viewcomments/viewcomments.component';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    LoginComponent,
    NewuserComponent,
    CreatepostComponent,
    EditpostComponent,
    ViewpostsComponent,
    AddcommentComponent,
    ViewcommentsComponent,
    EditaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
