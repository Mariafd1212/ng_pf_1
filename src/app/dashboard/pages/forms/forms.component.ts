import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        ]],
      lastName: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
        ]],    
      mail: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(60),
        Validators.minLength(11),
        ]],
      age: ['', [
        Validators.required,
        Validators.pattern(/^[1-9]\d*$/),
        Validators.maxLength(2),
        ]],
    });
  }

  public get nameControl() {
    return this.userForm.get('name');
  }
  public get lastNameControl() {
    return this.userForm.get('lastName');
  }
  public get mailControl() {
    return this.userForm.get('mail');
  }
  public get ageControl() {
    return this.userForm.get('age');
  }
}