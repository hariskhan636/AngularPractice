import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,   //When AppModule loads, its components load eagerly
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule, FormsModule, 
    RouterModule.forRoot([
      {
        path:'login',
        component: LoginComponent  //components are not standalone but have to be part of a module
      },
      {
        path:'signup',
        component: SignupComponent
      },
    ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
