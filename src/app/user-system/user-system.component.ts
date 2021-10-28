import { RandomUserResponse } from '../models/random-user.model'
import { RandomUserService } from './../random-user.service';
import { UserModel } from './../models/user.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'users',
  templateUrl: './user-system.component.html',
  styleUrls: ['./user-system.component.css']
})
export class UserSystemComponent implements OnInit {

  name:string;
  age:number;
  email:string;
  gender:string;
  userList:Array<UserModel>;

  constructor(private randomUserService: RandomUserService) { 
    this.name = "";
    this.age = 0;
    this.email = "";
    this.gender = "";
    this.userList = []
  }

  ngOnInit(): void {
  }

  addUser():void{
    this.userList.push(new UserModel(this.name, this.age, this.email, this.gender))
  }

  addRandomUser():void{
    this.randomUserService.getRandomUser().subscribe(result => {
      const randomUserResponse:RandomUserResponse = result;
      const name:string = randomUserResponse.results[0].name.first + ' ' + randomUserResponse.results[0].name.last;
      const age: number = randomUserResponse.results[0].dob.age;
      const email:string = randomUserResponse.results[0].email;
      const gender:string = randomUserResponse.results[0].gender;
      this.userList.push(new UserModel(name, age, email, gender));
    });
  }

}
