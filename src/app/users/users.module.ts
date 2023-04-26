import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DataService } from 'src/libs/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forChild([
      {
        path:'',
        component: UsersComponent  //components are not standalone but have to be part of a module
      },
      {
        path:'add',
        component: AddUserComponent  //components are not standalone but have to be part of a module
      },
    ])
  ],
  providers: [DataService]
})
export class UsersModule { }
