import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: any; 
  password: string = ''; 

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login().subscribe({
      next: (authUser) => {
        this.user = authUser;
        this.password = ''; 
        if (!!authUser) {
          this.router.navigate(['/dashboard']);
        }
      },
    });
  }
}
