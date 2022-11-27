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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogcardComponent } from './blogcard/blogcard.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

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
    EditaccountComponent,
    BlogcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always', appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
