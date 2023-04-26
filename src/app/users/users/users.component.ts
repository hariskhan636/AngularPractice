import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DataService } from 'src/libs/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  baseUrl = "https://reqres.in";
  loadingStatus = '';
  usersList: any[] = [];

  constructor(public userService: DataService, private http: HttpClient){}

  ngOnInit(): void {
  }

  getUsersFromServer(){
    this.loadingStatus = 'loading'
    const resource = "api/users?delay=3"
    const userRequest = this.http.get(`${this.baseUrl}/${resource}`)

    userRequest.subscribe((resp: any) =>{
      this.loadingStatus = 'done'
      this.usersList = resp.data
    },()=>{
      this.loadingStatus = 'error'
    })
  }
}
