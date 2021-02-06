import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerFrom:FormGroup;
  user:User;
  constructor(private fb:FormBuilder, private authService:AuthService) { 
    this.createFrom();
  }

  ngOnInit(): void {
  }

  borrarRegistro():void{

  }

  register(): void{
    if(this.registerFrom.invalid){
      return Object.values(this.registerFrom.controls).forEach(control => {
        control.markAsTouched();
      });
    }else{
      this.setUser();
      this.authService.register(this.user).subscribe((data: any) => {
        console.log('registro completado');
      }, error => {
        console.log(error);
      });
    }
  }

    createFrom():void{
      this.registerFrom = this.fb.group({
        email:['',[Validators.required]],
        password: ['',[Validators.required]],
      password2: ['',[Validators.required]]
    });
  }

  get emailValidate(){
    return(
      this.registerFrom.get('email').invalid && this.registerFrom.get('email').touched
    );
  }

  get passwordValidate(){
    return(
      this.registerFrom.get('password').invalid && this.registerFrom.get('password').touched
    );
  }

  get password2Validate(){
    const pass = this.registerFrom.get('password').value;
    const pass2 = this.registerFrom.get('password2').value;
    
    return pass === pass2 ? false : true;
  }

  
  setUser():void{
    this.user = {
      email: this.registerFrom.get('email').value,
      password: this.registerFrom.get('password').value
    }
  }
}
