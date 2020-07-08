import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {ApiManagerService} from '../../services/api-manager.service';
import {User} from '../../services/api-manager.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  

  users: [] = [];
  
  newUser: User = {name : "", surname : "",  email : "" , role: ""}

  constructor(private ApiManagerService: ApiManagerService) { 
    
   }

   

  ngOnInit(): void {}

  addNewUser(){

    this.ApiManagerService.sendMessage(this.newUser);

    this.ApiManagerService.insertUser(this.newUser)
    .then(i => i)
    .catch((error) => {console.log(error)});
  }

}
