import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/libs/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public userService: DataService){}

  ngOnInit(){
    
  }

  getName(index: number){
    return this.userService.users[index].firstName + ' ' + this.userService.users[index].lastName
  }

  updateUser(index: number){
    this.userService.users[index].firstName = "Updated Name"
  }
}
