import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styles: [
  ]
})
export class UsersDialogComponent {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder,
    private MatDialogRef: MatDialogRef<UsersDialogComponent>
    ) {
    this.userForm = this.fb.group({
      name: [' ', Validators.required],
      lastName: [' ', Validators.required],
      email: [' ', Validators.email, Validators.required],
    })
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAsUntouched();
    } else {
      this.MatDialogRef.close(this.userForm.value)
    }
  }
}
