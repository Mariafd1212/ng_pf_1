import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [],
})
export class UsersTableComponent {
  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<User>();
  
  displayedColumns = ['id','fullname', 'email', 'age', 'course', 'actions'];

  constructor(private router: Router)  {}

  goToDetail(userId: number): void {
    this.router.navigate(['dashboard','courses', 'detail', userId], {
      queryParams: {
        search: 'learning languages'
      }
    });
  }

}
