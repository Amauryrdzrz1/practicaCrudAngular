import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  user:User;
  constructor(private fb:FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  login():void{
    if(this.loginForm.invalid){
      return Object.values(this.loginForm.controls).forEach(control =>{
        control.markAsTouched();
      });
    }else{
      this.setUser();
      console.log(this.user)
    }
  }

  get emailValidate(){
    return(
      this.loginForm.get('email').invalid && this.loginForm.get('email').touched
    );
  }

  get passwordValidate(){
    return(
      this.loginForm.get('password').invalid && this.loginForm.get('password').touched
    );
  }

  createForm():void{
    this.loginForm = this.fb.group({
      email:['',[Validators.required]],
      password: ['',[Validators.required]],
    })
  }

  setUser():void{
    this.user = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    }
  }
}
