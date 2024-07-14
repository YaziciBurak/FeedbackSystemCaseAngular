import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../features/services/concretes/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isLoggedIn!: boolean;

  constructor(private authService:AuthService, private router:Router) {}
  ngOnInit(): void {
    
  }
  logOut() {
    this.authService.logOut();
    this.router.navigate(['homepage']);
  }
}
