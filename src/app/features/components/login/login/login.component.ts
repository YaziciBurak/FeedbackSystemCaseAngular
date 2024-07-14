import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/concretes/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserForLoginRequest } from '../../../models/requests/user/user-for-login-request';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{

 loginForm!:FormGroup
 submitted = false;

constructor(private authService:AuthService,private router:Router,
  private formBuilder:FormBuilder) {}

ngOnInit(): void {
  this.createLoginForm();
}
createLoginForm(){
  this.loginForm=this.formBuilder.group({
    email:["",[Validators.required,Validators.email]],
    password:["",[Validators.required]]
  })
}
login(){
  this.submitted = true;
  if(this.loginForm.valid){
    let loginModel:UserForLoginRequest = Object.assign({},this.loginForm.value);
    this.authService.login(loginModel).subscribe(response=>{
      console.log("Giriş Başarılı.", "Merhaba",)
    }
    ,(error:any)=>{ 
      console.error(error)
    })
  } 
}

}
