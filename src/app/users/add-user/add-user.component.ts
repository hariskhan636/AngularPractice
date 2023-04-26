import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/libs/data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userform!: FormGroup;

  constructor(public userService: DataService){}

  ngOnInit(){
    const firstNameControl = new FormControl('Ali', [Validators.required, Validators.maxLength(6)])
    const lastNameControl = new FormControl()

    this.userform = new FormGroup(
      {first_name: firstNameControl,
       last_name: lastNameControl
      }
    )
  }

  saveUser(){
    const fname = this.userform.controls['first_name']
    if(fname.invalid){
      let errorMsg = ''
      //console.log("fname.errors?.['maxLength']", fname.errors?.['maxlength']);
      if(fname.errors?.['maxlength']){
        errorMsg = `You entered ${fname.errors['maxlength'].actualLength} characters but max allowed are ${fname.errors['maxlength'].requiredLength}`
      }else{
        errorMsg = 'First Name required'
      }
      alert(errorMsg)
    }else{
      console.log('First Name: ', fname.value)
    }
    
    // console.log('Last Name: ', this.userform.controls['last_name'].value) 
  }

  // getName(index: number){
  //   return this.userService.users[index].firstName + ' ' + this.userService.users[index].lastName
  // }

  // updateUser(index: number){
  //   this.userService.users[index].firstName = "Updated Name"
  // }
}
