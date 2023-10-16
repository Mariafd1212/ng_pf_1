import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userName = '';


  users: User[] = [
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
    course: 'Ingles'
  }
]


  constructor(private matDialog: MatDialog) {}

  openUsersDialog(): void {this.matDialog
    .open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next:(v) => {

        if (!!v) {
          this.users = [
            ...this.users,
            {
              ...v,
              id: new Date().getTime(),
            },
          ];
        }
      }
  });
  }

  onEditUser(user: User): void {
    this.matDialog.open(UsersDialogComponent, {
      data: user,
    });
  }
  onDeleteUser(userId: number): void {
    if (confirm('Esta seguro de eliminar el usuario?')){
      this.users = this.users.filter((u) => u.id !== userId);}
    
  }
}