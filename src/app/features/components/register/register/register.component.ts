import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/concretes/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!:FormGroup
  submitted = false;
  constructor(private formBuilder:FormBuilder, private authService:AuthService,private router:Router) {}

  ngOnInit() {
    this.createRegisterForm();
  }
  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
    
     userName:["",[Validators.required]],
     email:["",[Validators.required, Validators.email]],
     password:["",[Validators.required]]
    })
   }

  register(){
    this.submitted = true;
    if(this.registerForm.valid){
      let registerModel = Object.assign({},this.registerForm.value);
      this.authService.register(registerModel).subscribe((response)=>{
        console.log("Kayıt Başarılı", "E-posta onayı için gelen kutunu kontrol etmeyi unutma.")
        this.router.navigate(['login']);
      },   error => {
        console.error(error, 'Kayıt Hatası');
      }) 
    } 
  }
}
