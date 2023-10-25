import { Inject, Injectable } from '@angular/core';
import { User } from './models';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {}

  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Mari',
        lastName: 'Diaz',
        email: 'mariasdf@gmail.com',
        age: 25,
        course: 'Chino'
      },
      {
        id: 2,
        name: 'Deiby',
        lastName: 'Faria',
        email: 'deiby@gmail.com',
        age: 32,
        course: 'Inglés'
      },
      {
        id: 3,
        name: 'Paula',
        lastName: 'Wong',
        email: 'paula@gmail.com',
        age: 40,
        course: 'Francés'
      },
      {
        id: 4,
        name: 'Fernando',
        lastName: 'Martinez',
        email: 'fernan2@gmail.com',
        age: 30,
        course: 'Alemán'
      }

    ];
  }
}