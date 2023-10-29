import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatIconModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
