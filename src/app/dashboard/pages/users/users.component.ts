import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnDestroy {
  userName = '';
  users: User[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private matDialog: MatDialog,
    private usersService: UsersService,
  ) {
    this.users = this.usersService.getUsers();
  }

  openUsersDialog(): void {
    this.matDialog
      .open(UsersDialogComponent)
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (v) => {
          if (!!v) {
            const newUser: User = {
              ...v,
              id: new Date().getTime(),
            };
            this.users = [...this.users, newUser];
            alert('Usuario creado con éxito');
          }
        },
      });
}

  guardarUsuario(user: User) {
  }

  onDeleteUser(userId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      if (confirm('¿Está seguro de eliminar el usuario?')) {
        this.users = this.users.filter((u) => u.id !== userId);
        alert('El usuario se eliminó con éxito.');
        resolve();
      } else {
        alert('No se pudo eliminar el usuario.');
        reject(new Error('No se pudo eliminar el usuario.'));
      }
    });
  }

  onEditUser(user: User): void {
    const dialogRef = this.matDialog.open(UsersDialogComponent, {
      data: user,
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (v) => {
          if (!!v) {
            this.users = this.users.map((u) =>
              u.id === user.id ? { ...u, ...v } : u
            );
            alert('El usuario fue modificado con éxito');
          } else {
            alert('No se pudo modificar el usuario');
          }
        }
      });
}

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
