import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginSuccessful:boolean = false;
  constructor() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
   }

  ngOnInit() {
  }

  onLogin(){
    let formdata=new FormData();
    let data=this.loginForm.value;
    formdata.append("formdata",JSON.stringify(data));
    console.log(formdata);
    this.loginSuccessful = true;
  }

}
