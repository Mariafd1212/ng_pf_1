import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../models';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _authUser$ = new BehaviorSubject<User | null>(null);

  public authUser$ = this._authUser$.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  login(payload: LoginPayload): Observable<User[]> {
    return this.httpClient.get<User[]>(
      `${environment.baseUrl}/users?email=${payload.email}&password=${payload.password}`
    );
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (token) {
      // Verificar si el token es válido haciendo una solicitud al servidor
      return this.httpClient
        .get<User[]>(`${environment.baseUrl}/users?token=${token}`)
        .pipe(
          map((users) => {
            // Si se encuentra al menos un usuario con el token, considerarlo válido
            return users.length > 0;
          })
        );
    } else {
      // Si no hay token en el almacenamiento local, considerarlo inválido
      return of(false);
    }
  }

  updateAuthUser(user: User | null): void {
    this._authUser$.next(user);
  }

  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
