import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { IconsComponent } from './pages/icons/icons.component';
import { IconsModule } from './pages/icons/icons.module';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './pages/forms/forms.component';





@NgModule({
  declarations: [
    DashboardComponent, FormsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    IconsModule,
    FormsModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
