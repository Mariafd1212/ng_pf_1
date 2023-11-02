import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/dashboard/pages/users/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: string = ''; 
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const payload = {
      email: this.user,
      password: this.password,
    };

    this.authService.login(payload).subscribe(
      (response: User[]) => {
        if (!response.length) {
          alert('Usuario o contraseña inválidos');
        } else {
          const authUser = response[0];
          this.authService.updateAuthUser(authUser);
          localStorage.setItem('token', authUser.token);
          this.router.navigate(['/dashboard/home']);
        }
      },
      (error) => {
        alert('Error de conexión');
      }
    );
  }
}
